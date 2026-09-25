import type { Response } from "express";
import { randomUUID } from "node:crypto";
import bcrypt from "bcryptjs";
import { pool } from "../config/db.js";
import { signToken } from "../config/jwt.js";
import { toPublicUser, type UserRow } from "../types/user.js";
import type { AuthedRequest } from "../middleware/requireAuth.js";
import type { Request } from "express";

const SALT_ROUNDS = 10;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function signup(req: Request, res: Response) {
  const { fullName, email, password, college, branch, graduationYear } = req.body ?? {};

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "Full name, email, and password are required." });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Enter a valid email address." });
  }
  if (String(password).length < 8) {
    return res.status(400).json({ message: "Password must be at least 8 characters." });
  }

  try {
    const [existing] = await pool.query<UserRow[]>(
      "SELECT id FROM users WHERE email = ? LIMIT 1",
      [email],
    );
    if (existing.length > 0) {
      return res.status(409).json({ message: "An account with this email already exists." });
    }

    const id = randomUUID();
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    await pool.query(
      `INSERT INTO users (id, full_name, email, password_hash, college, branch, graduation_year)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [id, fullName, email, passwordHash, college ?? null, branch ?? null, graduationYear ?? null],
    );

    const [rows] = await pool.query<UserRow[]>(
      "SELECT * FROM users WHERE id = ? LIMIT 1",
      [id],
    );
    const user = rows[0];

    const token = signToken({ sub: user.id, email: user.email });
    return res.status(201).json({ token, user: toPublicUser(user) });
  } catch (err) {
    console.error("[auth] signup error:", err);
    return res.status(500).json({ message: "Something went wrong creating your account." });
  }
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body ?? {};

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  try {
    const [rows] = await pool.query<UserRow[]>(
      "SELECT * FROM users WHERE email = ? LIMIT 1",
      [email],
    );
    const user = rows[0];

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const matches = await bcrypt.compare(password, user.password_hash);
    if (!matches) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = signToken({ sub: user.id, email: user.email });
    return res.status(200).json({ token, user: toPublicUser(user) });
  } catch (err) {
    console.error("[auth] login error:", err);
    return res.status(500).json({ message: "Something went wrong logging you in." });
  }
}

export async function me(req: AuthedRequest, res: Response) {
  try {
    const [rows] = await pool.query<UserRow[]>(
      "SELECT * FROM users WHERE id = ? LIMIT 1",
      [req.auth!.sub],
    );
    const user = rows[0];

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.status(200).json({ user: toPublicUser(user) });
  } catch (err) {
    console.error("[auth] me error:", err);
    return res.status(500).json({ message: "Something went wrong fetching your profile." });
  }
}

export async function completeOnboarding(req: AuthedRequest, res: Response) {
  const { careerGoal, githubUsername, resumeFilename } = req.body ?? {};

  try {
    await pool.query(
      `UPDATE users
       SET career_goal = ?, github_username = ?, resume_filename = ?, onboarded = TRUE
       WHERE id = ?`,
      [careerGoal ?? null, githubUsername ?? null, resumeFilename ?? null, req.auth!.sub],
    );

    const [rows] = await pool.query<UserRow[]>(
      "SELECT * FROM users WHERE id = ? LIMIT 1",
      [req.auth!.sub],
    );
    const user = rows[0];

    return res.status(200).json({ user: toPublicUser(user) });
  } catch (err) {
    console.error("[auth] onboarding error:", err);
    return res.status(500).json({ message: "Something went wrong saving your onboarding progress." });
  }
}

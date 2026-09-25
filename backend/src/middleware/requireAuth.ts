import type { Request, Response, NextFunction } from "express";
import { verifyToken } from "../config/jwt.js";
import type { AuthTokenPayload } from "../types/user.js";

export interface AuthedRequest extends Request {
  auth?: AuthTokenPayload;
}

export function requireAuth(req: AuthedRequest, res: Response, next: NextFunction) {
  const header = req.headers.authorization;

  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Missing or malformed Authorization header." });
  }

  const token = header.slice("Bearer ".length);

  try {
    req.auth = verifyToken(token);
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
}

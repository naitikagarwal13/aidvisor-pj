import type { RowDataPacket } from "mysql2";

export interface UserRow extends RowDataPacket {
  id: string;
  full_name: string;
  email: string;
  password_hash: string;
  college: string | null;
  branch: string | null;
  graduation_year: string | null;
  career_goal: string | null;
  github_username: string | null;
  resume_filename: string | null;
  onboarded: number | boolean;
  created_at: string;
  updated_at: string;
}

// Shape returned to the frontend — never includes password_hash.
export interface PublicUser {
  id: string;
  fullName: string;
  email: string;
  college: string | null;
  branch: string | null;
  graduationYear: string | null;
  careerGoal: string | null;
  githubUsername: string | null;
  resumeFilename: string | null;
  onboarded: boolean;
}

export function toPublicUser(row: UserRow): PublicUser {
  return {
    id: row.id,
    fullName: row.full_name,
    email: row.email,
    college: row.college,
    branch: row.branch,
    graduationYear: row.graduation_year,
    careerGoal: row.career_goal,
    githubUsername: row.github_username,
    resumeFilename: row.resume_filename,
    onboarded: Boolean(row.onboarded),
  };
}

export interface AuthTokenPayload {
  sub: string; // user id
  email: string;
}

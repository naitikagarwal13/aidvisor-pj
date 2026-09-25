-- AIDVISOR database schema
-- Run this once against a MySQL 8+ instance:
--   mysql -u root -p < schema.sql

CREATE DATABASE IF NOT EXISTS aidvisor
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE aidvisor;

CREATE TABLE IF NOT EXISTS users (
  id                CHAR(36)      NOT NULL PRIMARY KEY,
  full_name         VARCHAR(120)  NOT NULL,
  email             VARCHAR(190)  NOT NULL UNIQUE,
  password_hash     VARCHAR(255)  NOT NULL,
  college           VARCHAR(160)  NULL,
  branch            VARCHAR(120)  NULL,
  graduation_year   VARCHAR(4)    NULL,

  -- filled in during onboarding
  career_goal       VARCHAR(60)   NULL,
  github_username   VARCHAR(60)   NULL,
  resume_filename   VARCHAR(255)  NULL,
  onboarded         BOOLEAN       NOT NULL DEFAULT FALSE,

  created_at        TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at        TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
                                   ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Reserved for future AI-generated insights (resume analysis, GitHub
-- intelligence, roadmap steps, etc). Left empty on purpose — the AI
-- service layer will write here once it's wired up.
CREATE TABLE IF NOT EXISTS ai_insights (
  id            CHAR(36)      NOT NULL PRIMARY KEY,
  user_id       CHAR(36)      NOT NULL,
  insight_type  VARCHAR(60)   NOT NULL,  -- e.g. 'resume_analysis', 'github_scan', 'roadmap'
  payload       JSON          NOT NULL,
  created_at    TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT fk_ai_insights_user
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE INDEX idx_ai_insights_user_type ON ai_insights (user_id, insight_type);

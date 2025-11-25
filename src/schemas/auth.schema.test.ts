import { describe, it, expect } from "vitest";
import { loginSchema } from "./auth.schema";

describe("loginSchema", () => {
  it("validates correct email and password", () => {
    const validData = {
      email: "test@example.com",
      password: "password123",
    };

    const result = loginSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("rejects invalid email format", () => {
    const invalidData = {
      email: "invalid-email",
      password: "password123",
    };

    const result = loginSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it("rejects password shorter than 6 characters", () => {
    const invalidData = {
      email: "test@example.com",
      password: "12345",
    };

    const result = loginSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain(
        "Password must be at least 6 characters"
      );
    }
  });

  it("rejects missing email", () => {
    const invalidData = {
      password: "password123",
    };

    const result = loginSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it("rejects missing password", () => {
    const invalidData = {
      email: "test@example.com",
    };

    const result = loginSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});

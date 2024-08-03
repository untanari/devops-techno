import { validateUsername, validatePassword, validateEmail, validateName } from "@/function";

describe('Validation Functions', () => {
  // Username Tests
  it('validates usernames correctly', () => {
    expect(validateUsername("user_name")).toBe(true);
    expect(validateUsername("user.name")).toBe(true);
    expect(validateUsername("Valid_User123")).toBe(true);
    expect(validateUsername("user@name")).toBe(false);
    expect(validateUsername("us")).toBe(false);
    expect(validateUsername("username!")).toBe(false);
    expect(validateUsername("verylongusernamethatexceedsthemaximumlengthallowed")).toBe(false);
  });

  // Password Tests
  it('validates passwords correctly', () => {
    expect(validatePassword("Password123!")).toBe(true);
    expect(validatePassword("Pass12!")).toBe(false); // Too short (7 characters)
    expect(validatePassword("password123!")).toBe(false); // No uppercase letter
    expect(validatePassword("PASSWORD123!")).toBe(false); // No lowercase letter
    expect(validatePassword("Password!")).toBe(false); // No digit
    expect(validatePassword("Password123")).toBe(false); // No special character
  });

});
export function validateUsername(params: string) {
    const minLength = 3;
    const maxLength = 30;
    const validUsernamePattern = /^[a-zA-Z0-9_.]+$/;

    if (params.length < minLength || params.length > maxLength) {
        return false; // Invalid due to length
    }
    if (!validUsernamePattern.test(params)) {
        return false; // Invalid due to containing invalid characters
    }
    return true; // Valid username
}
export const validatePassword = (password: string) => {
    const minLength = 9; // Changed from 8 to 9
    const maxLength = 64;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength || password.length > maxLength) {
        return false; // Invalid due to length
    }
    if (!hasUpperCase || !hasLowerCase || !hasDigit || !hasSpecialChar) {
        return false; // Invalid due to missing character requirements
    }
    return true; // Valid password
}

export const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

export const validateName = (name: string) => {
    // Criteria for a valid name
    const minLength = 1;
    const maxLength = 50;
    const validNamePattern = /^[a-zA-Z\s'-]+$/;

    if (name.length < minLength || name.length > maxLength) {
        return false; // Invalid due to length
    }

    if (!validNamePattern.test(name)) {
        return false; // Invalid due to containing invalid characters
    }

    return true; // Valid name
}





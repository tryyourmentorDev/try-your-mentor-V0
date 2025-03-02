export const validateName = (name) => {
    if (!name.trim()) return "Name is required";
    return "";
  };
  
  export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) return "Email is required";
    if (!emailRegex.test(email)) return "Invalid email format";
    return "";
  };
  
  export const validatePassword = (password) => {
    if (!password) return "Password is required";
    if (password.length < 3) return "Password must be at least 3 characters long";
    if (password.length > 12) return "Password must not exceed 12 characters";
    return "";
  };
  
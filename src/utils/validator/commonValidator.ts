/**
 * Validates if the input value is empty.
 * @param value - The input value to validate.
 * @returns A boolean indicating whether the value is empty.
 */
export const isEmpty = (value: string | null | undefined): boolean => {
    return !value || value.trim() === "";
  };
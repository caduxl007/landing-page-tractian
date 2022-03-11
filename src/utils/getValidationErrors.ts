import { ValidationError } from 'yup';

export function getValidationErrors(
  err: ValidationError,
): Record<string, string> {
  const validationErrors: Record<string, string> = {};

  err?.inner?.forEach((error) => {
    validationErrors[error.path || ''] = error.message;
  });
  return validationErrors;
}

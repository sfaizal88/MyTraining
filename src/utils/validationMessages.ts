/**
 * 
 * Validation messager
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC FE MESSAGE
export const formValidationMessages = {
    error: () => 'Something went wrong, please try again after sometime.',
    success: () => 'Data has been saved successfully!',
    required: () => 'This field is required',
    invalidURL: () => 'Invalid website url',
    max: (val: number) => `Ensure this field has no more than ${val} characters`,
    alphanumeric: () => 'This should be an alphanumeric value',
    email: () => 'Invalid email address',
    dateFormat: () => 'Please input the date in DD/MM/YYYY format',
    duplicate: () => 'Duplicate record exists.',
    invalidDate: () => 'Invalid date format',
    invalidFormat: () => 'Invalid format',
    deletedSuccess: () => 'Deleted Successfully',
    cancelledSuccess: () => 'Cancelled Successfully',
    retrievedSuccess: () => 'Retrieved Successfully',
};

// ERROR CODE FROM BE AND GENERATE MESSAGE AT FE
export const validationMessages: Record<string, () => string> = {
  ERROR_001: () => 'Something went wrong, please try again after sometime.',
  ERROR_002: () => 'Duplicate title.',
  ERROR_003: () => 'Already tech stack assigned.',
  ERROR_004: () => 'Either username or password wrong.',
  ERROR_005: () => 'Session expired, please login again.',
  ERROR_006: () => 'Please enter all requried field before submitting.',
  ERROR_007: () => 'Customer name invalid. Allowed only alphanumeric.',
  ERROR_008: () => 'Invalid notes',
  ERROR_009: () => 'Invalid id, Please try again later',
  ERROR_010: () => 'Amount need to be in number',
  ERROR_011: () => 'Rate need to be in number',
  ERROR_012: () => 'Invalid remark',
  ERROR_013: () => 'You are not allowed to delete this customer.',
  ERROR_014: () => 'Username invalid. Allowed only alphanumeric.',
  ERROR_015: () => 'Duplicate username exists.',
  ERROR_016: () => 'Invalid web url',
  ERROR_017: () => 'Invalid email address',
  ERROR_018: () => 'Duplicate email address.',
  ERROR_019: () => 'Duplicate contact no.',
};
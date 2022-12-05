/**
 * 
 * Validation
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import * as yup from 'yup';

// UTILS IMPORT
import {formValidationMessages} from '@/utils/validationMessages';
import {fieldLength} from '@/utils/constants';

// SCHEMA CHECK
const schema = 
  yup.object({
    name: yup.string().nullable().required(formValidationMessages.required()).max(fieldLength.NAME, formValidationMessages.max(fieldLength.NAME)),
    email: yup.string().nullable().required(formValidationMessages.required()).email(formValidationMessages.email()).max(fieldLength.EMAIL, formValidationMessages.max(fieldLength.EMAIL)),
    contact_no: yup.string().nullable().required(formValidationMessages.required()).max(fieldLength.CONTACT_NO, formValidationMessages.max(fieldLength.CONTACT_NO)),
    dob: yup.string().nullable().required(formValidationMessages.required()),
    linked_link: yup.string().url(formValidationMessages.invalidURL()),
    github_link: yup.string().url(formValidationMessages.invalidURL()),
  });

export default schema;

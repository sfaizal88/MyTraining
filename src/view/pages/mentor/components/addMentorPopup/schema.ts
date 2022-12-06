/**
 * 
 * Add Mentor schema
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import * as yup from 'yup';

// UTILS IMPORT
import {formValidationMessages} from '@/utils/validationMessages';
import {fieldLength} from '@/utils/constants';

const schema = 
  yup.object({
    name: yup.string().nullable().required(formValidationMessages.required()).max(fieldLength.NAME, formValidationMessages.max(fieldLength.NAME)),
    students: yup.array().min(1, formValidationMessages.required()),
    dob: yup.string().nullable().required(formValidationMessages.required()),
    contact_no: yup.string().nullable().required(formValidationMessages.required()).max(fieldLength.CONTACT_NO, formValidationMessages.max(fieldLength.CONTACT_NO)),
    email: yup.string().nullable().required(formValidationMessages.required()).email(formValidationMessages.email()).max(fieldLength.EMAIL, formValidationMessages.max(fieldLength.EMAIL)),
  });

export default schema;

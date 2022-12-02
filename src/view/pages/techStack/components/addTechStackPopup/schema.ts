/**
 * 
 * Add TechStack schema
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import * as yup from 'yup';

// UTILS IMPORT
import {formValidationMessages} from '@/utils/validationMessages';

const schema = 
  yup.object({
    name: yup.string().nullable().required(formValidationMessages.required()),
    students: yup.array().min(1, formValidationMessages.required()),
    contact_no: yup.string().nullable().required(formValidationMessages.required()),
    email: yup.string().nullable().required(formValidationMessages.required()),
  });

export default schema;

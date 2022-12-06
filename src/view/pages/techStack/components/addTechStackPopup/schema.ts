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
import {fieldLength} from '@/utils/constants';

const schema = 
  yup.object({
    title: yup.string().nullable().required(formValidationMessages.required()).max(fieldLength.NAME, formValidationMessages.max(fieldLength.NAME)),
    tutorial_url: yup.string().url(formValidationMessages.invalidURL()),
    video_url: yup.string().url(formValidationMessages.invalidURL()),
  });

export default schema;

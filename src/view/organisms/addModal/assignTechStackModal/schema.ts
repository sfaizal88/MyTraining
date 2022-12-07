import * as yup from 'yup';
import {formValidationMessages} from '@/utils/validationMessages';

const schema = 
  yup.object({
    tech_stack_id: yup.number().nullable().required(formValidationMessages.required()),
  });

export default schema;

import * as yup from 'yup';
import {formValidationMessages} from '@/utils/validationMessages';

const schema = 
  yup.object({
    name: yup.string().nullable().required(formValidationMessages.required()),
  });

export default schema;

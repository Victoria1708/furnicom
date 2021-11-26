import {floatNumberValidator} from '@@app/forms/validators/float-number.validator';
import {integerNumberValidator} from '@@app/forms/validators/interger-number.validator';

export class CustomValidators {
  static integerNumber = integerNumberValidator;
  static floatNumber = floatNumberValidator;
}

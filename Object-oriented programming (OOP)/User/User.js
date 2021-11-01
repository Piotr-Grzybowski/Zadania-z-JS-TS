import { Validator } from '../utils/Validator.js';
import { uuidv4 } from '../utils/utils.js';

class User {
  constructor({ firstName, lastName, dateOfBirth, password, sex, email }, accessLevel = 'user') {
    Validator.isNotEmpty(firstName, 'First name');
    Validator.isNotEmpty(lastName, 'Last name');
    Validator.isCorrectDateFormat(dateOfBirth);
    Validator.isPasswordCorrect(password);
    Validator.isMaleOrFemale(sex);
    Validator.isEmail(email);

    this.uuid = uuidv4();
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.password = password;
    this.sex = sex;
    this.email = email;
    this.accessLevel = accessLevel;
  }
  changePassword = function(password) {
    Validator.isPasswordCorrect(password);
    this.password = password;
  }
  changeEmail = function(email) {
    Validator.isEmail(email);
    this.email = email;
  }
  changeAccessLevel = function(accessLevel) {
    Validator.isAccessLevel(accessLevel);
    this.accessLevel = accessLevel;
  }
}

export default User;
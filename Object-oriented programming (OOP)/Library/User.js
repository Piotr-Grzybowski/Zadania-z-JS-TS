import { Validator } from '../utils/Validator.js';
import { uuidv4 } from '../utils/utils.js';

class User {
  constructor(firstName, lastName) {
    Validator.isNotEmpty(firstName, 'First name');
    Validator.isNotEmpty(lastName, 'Last name');
    this.firstName = firstName;
    this.lastName = lastName;
    this.uuid = uuidv4();
  }
}

export default User;
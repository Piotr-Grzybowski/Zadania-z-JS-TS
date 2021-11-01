import { uuidv4 } from '../utils/utils.js';
import { Validator } from '../utils/validator.js';

class Contact {
  // contactData should contain valid first name, last name and email address
  constructor(contactData) {
    Validator.isNotEmpty(contactData.firstName, 'First name');
    Validator.isNotEmpty(contactData.lastName, 'Last name');
    Validator.isEmail(contactData.email);
    Object.assign(this, contactData);
    this.modifiedAt = new Date();
    this.createdAt = new Date();
    this.uuid = uuidv4();
  }
  change = function(key, value) {
    switch(key) {
      case 'firstName':
        Validator.isNotEmpty(value, 'First name');
        this.firstName = value;
        break;
      case 'lastName':
        Validator.isNotEmpty(value, 'Last name');
        this.lastName = value;
        break;
      case 'email':
        Validator.isEmail(value);
        this.email = value;
        break;
      default: throw new Error('Please choose proper property to change');
    }
    this.updateModifiedAt();
  }
  updateModifiedAt = function() {
    this.modifiedAt = new Date();
  }
}

export default Contact;
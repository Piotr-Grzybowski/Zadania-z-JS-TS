import Contact from './Contact.js';
import { uuidv4 } from '../utils/utils.js';
import { Validator } from '../utils/validator.js';

/**
 * Groups contains list of contacts id's only
 */
class Group {
  constructor(name) {
    this.name = name;
    this.listOfContacts = [];
    this.uuid = uuidv4();
  }
  changeGroupName = function(name) {
    Validator.isNotEmpty(name, 'Group name');
    this.name = name;
  }
  addContact = function(contact) {
    if (!(contact instanceof Contact)) throw new Error('Given contact details is not an instance of Contact object');
    if (this.checkIfContactExist(contact.uuid)) throw new Error('Contact is already in the group');
    this.listOfContacts.push(contact.uuid);
  }
  removeContact = function(contactId) {
    if (this.checkIfContactExist(contactId)) {
      this.listOfContacts.splice(this.getContactIndex(contactId), 1);
    }
    else throw new Error('Such a contact doesn\'t exist in this group');
  }
  checkIfContactExist = function(contactId) {
    if (this.listOfContacts.indexOf(contactId) !== -1) return true;
    return false;
  }
  getContactIndex = function(contactId) {
    return this.listOfContacts.indexOf(contactId);
  }
}

export default Group;
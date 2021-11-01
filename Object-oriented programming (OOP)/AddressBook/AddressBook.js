import Contact from './Contact.js';
import Group from './Group.js';
import { getIndex } from '../utils/utils.js';
import { Validator } from '../utils/validator.js';

class AddressBook {
  constructor() {
    this.listOfContacts = [];
    this.listOfGroups = [];
  }
  // Methods for groups
  createGroupOfContacts = function(name) {
    Validator.isNotEmpty(name, 'Group name');
    const group = new Group(name);
    this.listOfGroups.push(group);
    return group;
  }
  removeGroupOfContacts = function(groupId) {
    const indexOfGroup = this.checkIfGroupExist(groupId);
    this.listOfGroups.splice(indexOfGroup, 1);
  }
  changeNameOfGroupOfContacts = function(groupId, name) {
    const indexOfGroup = this.checkIfGroupExist(groupId);
    this.listOfGroups[indexOfGroup].changeGroupName(name);
  }
  addContactToGroup = function(contactId, groupId) {
    const indexOfContact = this.checkIfContactExist(contactId);
    const indexOfGroup = this.checkIfGroupExist(groupId);
    this.listOfGroups[indexOfGroup].addContact(this.listOfContacts[indexOfContact]);
  }
  removeContactFromGroup = function(contactId, groupId) {
    const indexOfGroup = this.checkIfGroupExist(groupId);
    const group = this.listOfGroups[indexOfGroup];
    if (!group.checkIfContactExist(contactId)) throw new Error('In this group there is no such a contact');
    group.removeContact(contactId);
  }
  checkIfGroupExist = function(groupId) {
    const indexOfGroup = getIndex(this.listOfGroups, groupId);
    if (indexOfGroup === -1) throw new Error('There is no such a group');
    return indexOfGroup;
  }
  // Function gets details of contacts for given group
  getAllContactsDetailsForGroup = function(groupId) {
    let list = [];
    const indexOfGroup = this.checkIfGroupExist(groupId);
    this.listOfGroups[indexOfGroup].listOfContacts.forEach(element => {
      list.push(this.listOfContacts[getIndex(this.listOfContacts, element)]);
    });
    return list;
  }
  // Methods for contacts
  createContact = function(contactData) {
    const contact = new Contact(contactData);
    this.listOfContacts.push(contact);
    return contact;
  }
  removeContact = function(contactId) {
    const indexOfContact = this.checkIfContactExist(contactId);
    this.listOfContacts.splice(indexOfContact, 1);
    this.removeContactFromAllGroups(contactId);
  }
  removeContactFromAllGroups = function(contactId) {
    this.listOfGroups.forEach(element => {
      element.removeContact(contactId);
    });
  }
  changeContactDetails = function(key, value) {
    const indexOfContact = this.checkIfContactExist(contactId);
    this.listOfContacts[indexOfContact].change(key, value);
  }
  checkIfContactExist = function(contactId) {
    const indexOfContact = getIndex(this.listOfContacts, contactId);
    if (indexOfContact === -1) throw new Error('There is no such a contact');
    return indexOfContact;
  }
  findContactsByPhrase = function(phrase) {
    const lowerCasePhrase = phrase.toLowerCase();
    const result =  this.listOfContacts.filter(element => {
      return (element.firstName.toLowerCase().includes(lowerCasePhrase) || element.lastName.toLowerCase().includes(lowerCasePhrase) || element.email.toLowerCase().includes(lowerCasePhrase));
    });
    return result;
  }
}

export default AddressBook;
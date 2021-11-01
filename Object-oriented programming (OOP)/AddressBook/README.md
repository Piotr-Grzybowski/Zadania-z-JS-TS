### Create structure of data associated with address book:

- [ ] Create object which defines single contact
- [ ] Create object that defines group of contacts
- [ ] The same for representation of address book


```javascript
class Contact {
    // Should have: first name, last name, email address, date of modification and uuid
    // Should have methods that let us: update modification date, change name, last name or email address

class Group {
    // Should have: list of contacts that belong to the group, name of the group and uuid
    // Functionalities: change name of the group, add or remove contact to/from the group, check if contact exist in the group
}

class AddressBook {
// Should have: list of all contacts, list of all groups of contacts
// Functionalities: searching for contact using phrase, add/remove/edit contact, add/remove/edit groups
}
}
```
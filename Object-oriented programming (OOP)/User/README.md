### Create two classes that will have a structure like given in a code below:

- [ ] Class **User** should have two levels of access: **admin** and **user**
- [ ] It should have methods to change **password**, **email address** and **access level**
- [ ] User with access level **admin** should have ability to change passwords, email addresses or access levels of other users
- [ ] Class **App** should handle relations between users
- [ ] It should have **list of users** and let create new users with different access levels
- [ ] Create class **Validator** with static methods responsible for validating users's data

```javascript
// During validation check given details:
// - is email address correct
// - is password 8 characters long, have at least one capital letter, one digit and one special character
// - is sex male or female only
// - date should be in format MM/DD/YYYY
// - firstName and lastName shouldn't be empty
// If any of validations won't success we shouldn't create new instance and instead return error with suitable message
// You can add any other validation if needed

class User{
 firstName
 lastName
 dateOfBirth
 password
 sex
 emailAddress
 accessLevel = "user" | "admin")
}

class App{
 listOfUsers
 createUser(...)
 createAdmin(...)
 All methods that lets admin affect on other users
}
```
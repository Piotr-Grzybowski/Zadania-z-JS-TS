### Using creational design patter **Builder** create object that will represent all e-mail message parameters:


```javascript
class EmailBuilder{
  constructor() {
    this._mail = {
      from: "",
      to: "",
      title: "",
      cc: [],
      bcc: [],
      html: "",
    };
  }

  // Create methods to change properties from, to, title, cc, bcc, html

  buildMail = () => {
   // Check if required properties have correct values
   // Return an email message
  }
}
```
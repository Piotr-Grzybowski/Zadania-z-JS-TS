import { Validator } from '../utils/Validator.js';

class Email {
  constructor(emailData) {
    Object.assign(this, emailData);
  }
}

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
  setFrom = function(from) {
    this._mail.from = from;
    return this;
  }
  setTo = function(to) {
    this._mail.to = to;
    return this;
  }
  setTitle = function(title) {
    this._mail.title = title;
    return this;
  }
  addCC = function(cc) {
    this._mail.cc.push(cc);
    return this;
  }
  addBCC = function(bcc) {
    this._mail.bcc.push(bcc);
    return this;
  }
  setContent = function(html) {
    this._mail.html = html;
    return this;
  }

  buildMail = () => {
   // Required fields are from and to. If title is empty then we set 'No title' as default
    Validator.isNotEmpty(this._mail.from, 'Please fill in \'from\' field. Sender');
    Validator.isNotEmpty(this._mail.to, 'Please fill in \'to\' field. Receiver');
    if (this._mail.title.length === 0) this._mail.title = 'No title';
    return new Email(this._mail);
  }
}

//We build new Object like that:

const email = new EmailBuilder().setFrom('jack.dawson@titanic.com').setTo('Rose@iceberg.com').buildMail();
console.log(email);
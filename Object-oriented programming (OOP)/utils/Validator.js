export class Validator {
  static isEmail(email) {
    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'g');
    if (!emailRegex.test(email)) throw new Error('Email must be valid email address')
  }
  static isPasswordCorrect(password) {
    const passwordRegex = new RegExp(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'g');
    if (!passwordRegex.test(password)) throw new Error('Password must be at least 8 characters long, have at least one UpperCase letter, one number and one special character');
  }
  static isMaleOrFemale(sex) {
    if (!(sex === 'male' || sex === 'female')) throw new Error('Sex has to be \'male\' or \'female\'');
  }
  static isCorrectDateFormat(date) {
    const dateRegex = new RegExp(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/, 'g');
    if (!(dateRegex.test(date))) throw new Error('Date must be in format \'MM/DD/YYYY\'');
  }
  static isNotEmpty(name, key) {
    if (name.length === 0) throw new Error(`${key} can't be empty`);
  }
  static isAccessLevel(accessLevel) {
    if (!(accessLevel === 'admin' || accessLevel === 'user')) throw new Error('User must be a regular user or admin. Please choose proper access level');
  }
}
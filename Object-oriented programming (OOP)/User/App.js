import User from './User.js';
import { getIndex } from '../utils/utils.js';

class App {
  constructor() {
    this.listOfUsers = [];
  }
  createUser = function(userData) {
    const user = new User(userData);
    this.listOfUsers.push(user);
    return user;
  }
  createAdmin = function(userData) {
    const admin = new User(userData, 'admin');
    this.listOfUsers.push(admin);
    return admin;
  }
  removeUser = function(adminId, userId) {
    if (this.canAdminPerformAnAction(adminId, userId)) {
      const index = getIndex(this.listOfUsers, userId);
      this.listOfUsers.splice(index, 1);
    }
  }
  changePasswordByAdmin = function(adminId, userId, password) {
    if (this.canAdminPerformAnAction(adminId, userId)) {
      this.listOfUsers[getIndex(this.listOfUsers, userId)].changePassword(password);
    }
  }
  changeEmailByAdmin = function(adminId, userId, email) {
    if (this.canAdminPerformAnAction(adminId, userId)) {
      this.listOfUsers[getIndex(this.listOfUsers, userId)].changeEmail(email);
    }
  }
  changeAccessLevelByAdmin = function(adminId, userId, accessLevel) {
    if (this.canAdminPerformAnAction(adminId, userId)) {
      this.listOfUsers[getIndex(this.listOfUsers, userId)].changeAccessLevel(accessLevel);
    }
  }
  canAdminPerformAnAction = function(adminId, userId) {
    if (this.checkIfUserExist(userId) && this.checkIfUserExist(adminId) && this.checkIfAdmin(adminId)) {
      return true;
    }
    return false;
  }
  checkIfUserExist = function(userId) {
    if (getIndex(this.listOfUsers, userId) !== -1) return true;
    return false;
  }
  checkIfAdmin = function(userId) {
    const user = getIndex(this.listOfUsers, userId);
    if (this.listOfUsers[user].accessLevel === 'admin') return true;
    return false;
  }
}

export default App;
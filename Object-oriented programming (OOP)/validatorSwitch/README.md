### Create class **validatorSwitch** for multiple validation

- [ ] create class validationSwitch
- [ ] Class should have a method **.add** in which we can add condition and callback to be invoked if the condition is fullfilled
- [ ] Class should have method **.isValid** which iterates over all cases and checks all given conditions
- [ ] Class should have method **.isEmpty** which checks whether arrays with conditions and cases are empty. If so it returns **true**
- [ ] **.isValid** returns true if all conditions will be falsy. If any of conditions is not fulfilled then function invoke callback given for that specific condition. After **.isValid** is being called every time both conditions and cases are being cleared.


```javascript
class Switch {
  cases = [];
  conditions = [];

  add(condition, callback) {}
  isValid() {
    // return this.conditions
  }
}

// should work that way:
const formChecker = new Switch();
const value = "test";

formChecker.add(value.length < 5, () => {
  console.error("value is too short");
});

formChecker.add(!value.includes("@"), () => {
  console.error("value is not an email");
});

// formChecker.isEmpty() === false
formChecker.isValid(); // === false
// console.error('value is to short')
// console.error('value is not an email')
// formChecker.isEmpty() === true
// chunks:
// [[a,b,c,d,e,f],[g,h,i,j,k],[l,m,n,o,p,r,s],[t,u,w,x,y,z]]
```
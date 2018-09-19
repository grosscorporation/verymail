const verymail = require("../src/index.js");

verymail("contact@gogross.com")
  .then(result => {
    result.isValid ? console.log("Valid!") : console.log("Invalid!");
    console.log(JSON.stringify(result));
  })
  .catch(err => console.log(err));

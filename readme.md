# Verymail

Confirm if an email address is valid and able to deliver and recieve email messages.

## Installation

```html
$ npm install verymail
```
## Usage

```javascript
const verymail = require("verymail");

verymail("validemail@validdomain.com")
  .then(result => {
    result.isValid ? console.log("Valid!") : console.log("Invalid!");
    console.log(JSON.stringify(result));
  })
  .catch(err => console.log(err));

```

If an email addresses domain is verymail then the object returned will include an `isValid` key that will be set to `true` as well as an `mxArray` key with all the MX record information for the valid domain.

If the domain has no MX or cannot resolve any MX then it will return `isValid` as `false`.

Anything else is considered an error and you'll get it in the `.catch`

## Example Response
For a valid email address, you'll get the following response object:

```json
{
   "isValid":true,
   "mxArray":[
      {
         "exchange":"aspmx.l.google.com",
         "priority":1
      },
      {
         "exchange":"alt1.aspmx.l.google.com",
         "priority":5
      },
      {
         "exchange":"alt2.aspmx.l.google.com",
         "priority":5
      },
      {
         "exchange":"alt3.aspmx.l.google.com",
         "priority":10
      },
      {
         "exchange":"alt4.aspmx.l.google.com",
         "priority":10
      }
   ]
}
```

## License

(The MIT License)

Copyright (c) 2018 Zeal Murapa, and contributors.
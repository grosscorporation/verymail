  <br />
  <br />
  <br />
  <br />

[![VeryMail](https://raw.githubusercontent.com/GoGross/verymail/master/verimail.png)](https://verymail.gogross.com)

---
## VeryMail Premium

VeryMail, email address validation REST API engine, a thorough aggregated email verification api and mailing list authenticator service.

## :cloud: Installation

```sh
# Using npm
npm install --save verymail

```

## Getting started

[![VeryMail](https://raw.githubusercontent.com/GoGross/fincharts/master/free-key.jpg)](https://verymail.gogross.com)

VeryMail offers for developers a method to connect their applications via our interactive, always live api inorder to keep control of their email comminication.

## API

VeryMail exposes its data via an Application Programming Interface (API), so developers can interact in a programmatic way with the VeryMail Service. This document is the official reference for that functionality.

## Authentication

#### Auth: API Key
All VeryMail API endpoints require an access token generated from your dashboard as an API key.

## Cross-Origin Resource Sharing (CORS) 

VeryMail is CORS enabled and allows Access-Control Headers. This will enable you to use our API via Cross-Origin HTTP Requests in application/json, application/x-www-form-urlencoded, multipart/form-data, text/plain. You don't need to specify any headers to make a CORS request as they are enabled by default.

## :clipboard: Example

### REST
```
curl -X GET \
  -H "Content-Type: application/json" \
  -d '{"mailingList":[], options: {saveList : false, reportAbusive: true, listName: "Launch Campaign"}' \
  https://api.gogross.com/verymail?key=get_free_api_key
```
 
### NodeJS

```js
const VeryMail     = require ( 'verymail' );
const VERYMAIL_KEY   = process.env.VERYMAIL_KEY;  // API Key

const mail = {
	options: {
		saveList : false, // dedicated plans only
		reportAbusive: true
	},
	mailingList: ["simon.says@gmail.com"] // array, limit 100
};

const veryMail     = new VeryMail ( mail, VERYMAIL_KEY  );
veryMail.verify ( )
	.then ( ( results ) => {
		
		console.log ( results );
		
	} )
	.catch ( ( error ) => {
		
		console.trace ( error );
		
	} );

```

Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 3.0 License, and code samples are licensed under the Apache 2.0 License. For details, see our Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

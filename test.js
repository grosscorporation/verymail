const VeryMail     = require ( './index' );
const VERYMAIL_KEY   = process.env.VERYMAIL_KEY;  // API Key

const mail = {
	options: {
		saveList : false, // dedicated plans only
	},
	mailingList: [ "email1@gmail.com", "email2@live.com", "email3@gogross.com" ]
};

const veryMail     = new VeryMail ( mail, VERYMAIL_KEY  );
veryMail.verify ( )
	.then ( ( results ) => {
		
		console.log ( results );
		
	} )
	.catch ( ( error ) => {
		
		console.trace ( error );
		
	} );

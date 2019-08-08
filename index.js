"use strict";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const request = require ( 'request' );
const _ = require ( 'lodash' );

/**
 * @class VeryMail
 * @hideconstructor
 * @classdesc Verymail offers for developers a method to connect their applications via our interactive, always live api inorder to keep control on things.
 * @fileOverview email validation on demand
 * @version 1.0.0
 * @module VeryMail
 * @param {string} VERYMAIL_KEY - environment key
 * @returns {Promise} VeryMail Object
 *
 */

module.exports = class VerMail {
	
	/**
	 * @constructor
	 * @hideconstructor
	 * @param {string} VERYMAIL_KEY - environment key
	 * @param {array} CONFIG - options object for printing document
	 */
	constructor ( CONFIG, VERYMAIL_KEY ) {
		
		this.mailingList  = CONFIG.mailingList;
		this.options      = CONFIG.options || {};
		this.VERYMAIL_KEY = VERYMAIL_KEY || process.env.VERYMAIL_KEY;
		this.baseURL      = (process.env.NODE_ENV = "development") ? "https://localhost:8080/verymail" : "https://api.gogross.com/verymail";
		
	}
	
	static async  removeDuplicates() {
	
	}
	
	async verify () {
		
		return new Promise ( async ( resolve, reject ) => {
			
			if ( !this.VERYMAIL_KEY ) {
				
				reject ( "Error, missing API KEY environment variable" )
				
			} else if(this.mailingList > 100) {
				
				reject ( "You can verify a maximum of 100 email addresses at a time" )
				
			}else {
				
				let mailingListWithoutDuplicates = await _.uniq(this.mailingList);
				
				let url = this.baseURL + '?key=' + this.VERYMAIL_KEY;  // signup for free at docengine.gogross.com
				
				return request ( {
					url : url,
					method : 'get',
					headers : {},
					body : {
						mailingList : JSON.stringify ( mailingListWithoutDuplicates ),
						options : this.options
					},
					json : true
				}, async function ( error, response, body ) {
					
					if ( error ) {
						
						reject ( error )
						
					} else {
						
						try {
							
							body = JSON.parse ( body );
							
							if ( body.hasOwnProperty ( "error" ) ) {
								
								reject ( body )
								
							} else {
								
								resolve ( body )
								
							}
							
						} catch ( e ) {
							
							resolve ( body )
							
						}
						
					}
					
				} );
				
			}
			
		} )
		
	}
	
};

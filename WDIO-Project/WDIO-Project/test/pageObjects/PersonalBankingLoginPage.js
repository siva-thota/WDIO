var { config } = require('../../wdio.conf');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var assert = require('chai').assert;

var Utils = require('../utils/Utils');
var utils = new Utils();

const expectedTitle = "Lloyds Bank - Welcome to Internet Banking";

class PersonalBankingLoginPage {

assertPersonalBankingLogOnPageTitle(){
	
		 utils.assertTitle(expectedTitle);
		 
		}
}
module.exports =  PersonalBankingLoginPage;
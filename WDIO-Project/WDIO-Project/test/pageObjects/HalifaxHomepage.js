var { config } = require('../../wdio.conf');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var assert = require('chai').assert;

var Utils = require('../utils/Utils');
var utils = new Utils();

const expectedTitle = "Halifax UK | Bank Accounts, Savings, Loans & Mortgages";

class HalifaxHomepage {

assertHalifaxHomepageTitle(){
	
		 utils.assertTitle(expectedTitle);
		 
		}
}
module.exports =  HalifaxHomepage;


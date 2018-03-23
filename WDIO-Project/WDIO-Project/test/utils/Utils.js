var { config } = require('../../wdio.conf');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var assert = require('chai').assert;

class Utils{

	assertTitle(expectedTitle){
	
		 var actualTitle = browser.getTitle();
		 return assert.equal(expectedTitle, actualTitle);

		}

	launchURL(url){

		return browser.url(url);
	}

	click(locator){

		return browser.click(locator);
	}
}
module.exports = Utils;
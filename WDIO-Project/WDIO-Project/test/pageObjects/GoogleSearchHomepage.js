var { config } = require('../../wdio.conf');
 
const SEARCHTEXTBOX = '//input[@id="lst-ib"]';
const SUBMIT = '//input[@value="Google Search" and @type="submit"]';
const RESULT = '//a[@href="http://www.halifax.co.uk/"]';

var Utils = require('../utils/Utils');
var utils = new Utils();

class GoogleSearchHomepage {

	goToGoogleHomepage() {

    utils.launchURL("https://www.google.co.in");
	}

	searchText(text) {

    browser.setValue(SEARCHTEXTBOX,text);

    browser.click(SUBMIT);
	}

	navigateToResult(){
	browser.click(RESULT);
	}

}

module.exports =  GoogleSearchHomepage;

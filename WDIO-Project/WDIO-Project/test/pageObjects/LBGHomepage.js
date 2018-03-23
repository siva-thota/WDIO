var { config } = require('../../wdio.conf');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var assert = require('chai').assert;

const PERSONALBUTTON = "//ul[@class='login-button-list']/li/a[contains(text(),'Personal')]";
const BUSINESSBUTTON = "//ul[@class='login-button-list']/li/a[contains(text(),'Business')]";
const CONTACTUS = "//li[@class='primary-header-btn contact-us']/a/span[contains(text(),'Contact Us')]"

var Utils = require('../utils/Utils');
var utils = new Utils();

class LBGHomepage {

    goToLBGHomepage() {
   
    utils.launchURL("https://www.lloydsbank.com");
    
    }

	navigateToPersonalBankingPage(){

        utils.click(PERSONALBUTTON);
	}

	navigateToBusinessBankingPage(){

        utils.click(BUSINESSBUTTON);
    }

	navigateToContactUsPage(){

        utils.click(CONTACTUS);
    
	}

}
module.exports =  LBGHomepage;
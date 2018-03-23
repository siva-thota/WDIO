var { config } = require('../../wdio.conf');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var assert = require('chai').assert;
var expect = require('chai').expect;

var Utils = require('../utils/Utils');
var utils = new Utils();


const h3option1 = "//div[@class='title-wrapper']/h3[contains(text(),'I want to call Lloyds Bank')]";
const h3option2 = "//div[@class='title-wrapper']/h3[contains(text(),'My card is lost or stolen')]";
const h3option3 = "//div[@class='title-wrapper']/h3[contains(text(),'noticed suspicious activity')]";
const h3option4 = "//div[@class='title-wrapper']/h3[contains(text(),'Ask a question')]";
const h3option5 = "//div[@class='title-wrapper']/h3[contains(text(),'Self Service')]";
const h3option6 = "//div[@class='title-wrapper']/h3[contains(text(),'Make a complaint')]";

const pageTitle = "Lloyds Bank - Contact Information - Phone Numbers, Branch Info & More";


class ContactUsPage {

assertContactUsPageTitle(){	
		 
		 utils.assertTitle(pageTitle);

		}

assertPageElements(){
		
		assert.isTrue(browser.isVisible(h3option1));
		assert.isTrue(browser.isVisible(h3option2));
		assert.isTrue(browser.isVisible(h3option3));
		assert.isTrue(browser.isVisible(h3option4));
		assert.isTrue(browser.isVisible(h3option5));
		assert.isTrue(browser.isVisible(h3option6));

}
}
module.exports =  ContactUsPage;
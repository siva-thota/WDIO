var {defineSupportCode} = require('cucumber');
var LBGHomepage = require('../pageObjects/LBGHomepage');
var PersonalBankingLogOnPage = require('../pageObjects/PersonalBankingLoginPage');
var BusinessLogOnPage = require('../pageObjects/BusinessCustomerLoginPage');
var ContactUsPage = require('../pageObjects/ContactUsPage');

var lBGHomepage = new LBGHomepage();
var personalBankingLogOnPage = new PersonalBankingLogOnPage();
var businessLogOnPage = new BusinessLogOnPage();
var contactUsPage = new ContactUsPage();

defineSupportCode(({Given, When, Then}) => {

	Given(/^I am on Lloyds homepage$/, function(){

		lBGHomepage.goToLBGHomepage();

	});

	When(/^I click on "(.*)" link$/, function(link){

	 	if (link == "Personal banking logon"){

	 		lBGHomepage.navigateToPersonalBankingPage();
	 	}
	 	else if (link == "Business banking logon"){

	 		lBGHomepage.navigateToBusinessBankingPage();
	 	}
	 	else{

	 		lBGHomepage.navigateToContactUsPage();
	 	}
	 	
	});

 	Then(/^I should be on "(.*)" page$/, function(pageName){

 	    if (pageName == "Personal banking logon"){

	 		personalBankingLogOnPage.assertPersonalBankingLogOnPageTitle();

	 	}
	 	else if (pageName == "Business banking logon"){

	 		businessLogOnPage.assertBusinessLogOnPageTitle();

	 	}
	 	else{

	 		contactUsPage.assertContactUsPageTitle();
	 		contactUsPage.assertPageElements();

	 	}

 	});


 });

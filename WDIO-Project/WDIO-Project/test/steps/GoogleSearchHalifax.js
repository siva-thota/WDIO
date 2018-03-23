var {defineSupportCode} = require('cucumber');
var GoogleHomepage = require('../pageObjects/GoogleSearchHomepage');
var HalifaxHomepage = require('../pageObjects/HalifaxHomepage')

var googleHomepage = new GoogleHomepage();
var halifaxHomepage = new HalifaxHomepage();

defineSupportCode(({Given, When, Then}) => {

	Given(/^I navigated to Google homepage$/, function(){

		googleHomepage.goToGoogleHomepage();

	});

	When(/^I perform a search for text "(.*)"$/, function(searchText){

	 	googleHomepage.searchText(searchText);

	});

 	When(/^I navigate to the Halifax homepage$/, function(){
 	
	 	googleHomepage.navigateToResult();

	 });

 	Then(/^I should be on the Halifax homepage$/, function(){

 	    halifaxHomepage.assertHalifaxHomepageTitle();

 	});
});
	
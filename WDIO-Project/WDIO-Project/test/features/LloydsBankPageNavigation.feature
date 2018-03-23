Feature: Navigation to login page for both business/personal customers and contact Us page, from Lloyds bank homepage

Background: 
Given I am on Lloyds homepage

Scenario: Navigate to personal banking logon page for personal customer
When I click on "Personal banking logon" link
Then I should be on "Personal banking logon" page

Scenario: Navigate to business banking logon page for Business customer
When I click on "Business banking logon" link
Then I should be on "Business banking logon" page

Scenario: Navigate to Contact Us page
When I navigate to "Contact Us" page
Then I should be on "Contact Us" page

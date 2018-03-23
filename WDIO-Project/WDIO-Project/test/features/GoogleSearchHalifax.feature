Feature: Google search for Halifax

Scenario: Perform a Google search for Halifax
Given I navigated to Google homepage
When I perform a search for text "Halifax"
And I navigate to the Halifax homepage
Then I should be on the Halifax homepage
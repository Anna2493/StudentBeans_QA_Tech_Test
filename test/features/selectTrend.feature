Feature: Selecting Trend

Scenario: As a user I want to see the Trending Now offers on studentbeans.com and select a trending discount
  Given I am on the studentbeans homepage
  When I click on "Trending Now" navigation link
  When I select the 6th discount from the list
  Then I should see this discount details

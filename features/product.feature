Feature: Product Feature

 Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate product sort by price <sort>
  When I will login as 'standard_user'
  Then I should see the title "Swag Labs"
  When I select the "<sortOrder>" sort option
  Then the products must be sorted by "<sortOrder>" based by price
  And price for the first product should be "<firstPrice>"
  And price for the last product should be "<lastPrice>"

  Examples:
 | sortOrder           | firstPrice | lastPrice |
 | Price (low to high) | $7.99      | $49.99    |
 | Price (high to low) | $49.99     | $7.99     |
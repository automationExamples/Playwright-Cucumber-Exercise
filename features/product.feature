Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  # Create a datatable to validate the Price (high to low) and Price (low to high) sort options (top-right) using a Scenario Outline
  Scenario Outline:  Validate product sort by price <sort>
  Then I will login as 'standard_user'
    Then I sort products by '<sort>'
    Then I should see products sorted by price '<order>'
  Examples:
    | sort                  | order        |
    | Price (low to high)  | low to high  |
    | Price (high to low)  | high to low  |
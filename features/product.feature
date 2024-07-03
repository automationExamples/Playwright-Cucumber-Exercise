Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  # Create a datatable to validate the Price (high to low) and Price (low to high) sort options (top-right) using a Scenario Outline
  Scenario Outline:  Validate product sort by Price (high to low) and Price (low to high)
    Then I will login as 'standard_user'
    Then I sort the products by "<sort_option>"
    Then I will validate all 6 items are sorted correctly by price

    Examples:
      | sort_option |
      | Price (high to low) |
      | Price (low to high) |
    

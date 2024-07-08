Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  # Create a datatable to validate the Price (high to low) and Price (low to high) sort options (top-right) using a Scenario Outline
  Scenario Outline:  Validate product sort by price <sort>
  Then I will login as 'standard_user'
   Then Sort the items by <sort>
    Then Validate all 6 items are sorted correctly by price
  Examples:
   
       Examples:
      | sort                 |
      | Price (high to low)  |
      | Price (low to high)  |
      | Name (A to Z)        |
      | Name (Z to A)        |
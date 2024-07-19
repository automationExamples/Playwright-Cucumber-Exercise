Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  # Create a datatable to validate the Price (high to low) and Name (A to Z) sort options (top-right) using a Scenario Outline
  Scenario Outline:  Validate product sort by price and name <sort>
  Then I will login as 'standard_user'
    # Loop through the different sort methods listed in the datatable below
  Then I will sort the items by "<sort>"
    # Validation for all items on the page
  Then I will validate the items are sorted by "<sort>"
  Examples:
    # Paramaterized datatable to validate the price and name
    | sort|
    | az  |
    | za  |
    | lohi|
    | hilo| 

Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  # Create a datatable to validate the Price (high to low) and Price (low to high) sort options (top-right) using a Scenario Outline
  # TODO: Sort the items by <sort>
    # TODO: Validate all 6 items are sorted correctly by price
     # TODO: extend the datatable to paramterize this test
  
  
  @debug
  Scenario Outline:  Validate product sort by price <sort>
  Then I will login as 'standard_user'
  Then I select sort by "<sort>"
  Then validate all items are sorted correctly by "<sort>"
    
  Examples:
   
    | sort |
    |Price (low to high)|
    |Price (high to low)|
    |Name (A to Z)|
    |Name (Z to A)|
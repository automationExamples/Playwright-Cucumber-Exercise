Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  # Create a datatable to validate the Price (high to low) and Price (low to high) sort options (top-right) using a Scenario Outline
  Scenario Outline:  Validate product sort by price <sort>
  Then I will login as 'standard_user'
    # TODO: Sort the items by <sort>
  Then I will sort the items from <sort>
    # TODO: Validate all 6 items are sorted correctly by price
  Then I will validate all 6 items are in the correct order by PRICE
  Examples:
    # TODO: extend the datatable to paramterize this test
    | sort |
    | low to high |
    | high to low |




  # My addition to the tests
  Scenario:  Validate that items can be removed from the cart
  Then I will login as 'standard_user'
  Then I will add the first 3 items to the cart
  Then I will click cart
  Then I will verify 3 items are here
  Then I will remove 1 item from the cart
  Then I will verify 2 items are here

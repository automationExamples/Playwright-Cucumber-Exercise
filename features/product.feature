Feature: Product Feature

 Background:
    Given I open the "https://www.saucedemo.com/" page

  # Create a datatable to validate the Price (high to low) and Price (low to high) sort options (top-right) using a Scenario Outline
  Scenario Outline:  Validate product sort by price <sort>
  Then I will login as 'standard_user'
  And The User is able to Sort the items from High to low
  And The User is able to check the price sorted 
  And The User is able to check the price sorted "6"
  And The User is able to check the price sorted "5"
  And The User is able to check the price sorted "4"
  And The User is able to check the price sorted "3"
  And The User is able to check the price sorted "2"
  And The User is able to check the price sorted "1"
  And The USer is able to Sort the items from low to high
  And The User is able to check the price sorted "1"
  And The User is able to check the price sorted "2"
  And The User is able to check the price sorted "3"
  And The User is able to check the price sorted "4"
  And The User is able to check the price sorted "5"
  And The User is able to check the price sorted "6"
    # TODO: Sort the items by <sort>
    # TODO: Validate all 6 items are sorted correctly by price
  Examples:
    # TODO: extend the datatable to paramterize this test
    | sort |
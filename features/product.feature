Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  # Create a datatable to validate the Price (high to low) and Price (low to high) sort options (top-right) using a Scenario Outline
  Scenario Outline:  Validate product sort by price <sort>
  Then I will login as 'standard_user'
  Then verify that Product page is displayed
    # Sort the items by <sort> 
  When I select option '<sort>'
     # Validate all 6 items are sorted correctly by price 
  Then I should see prices in '<order>' order for items:
     #  Verify Item Names and corresponding prices are displayed correctly
     |Items                       | Price|
     |Sauce Labs Fleece Jacket    |$49.99|
     |Sauce Labs Bolt T-Shirt     |$15.99|
     |Sauce Labs Bike Light       |$9.99|
     |Sauce Labs Backpack                         |$29.99|
     |Test.allTheThings() T-Shirt (Red)           |$15.99|
     |Sauce Labs Onesie                           |$7.99| 
 #  Take a Screenshot
 Then I take a screenshot
  Examples:
    | sort |   order|
    | Hi_Lo| Descending  |
    |Lo_Hi |  Ascending  |
Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  # Create a datatable to validate the Price (high to low) and Price (low to high) sort options (top-right) using a Scenario Outline
  Scenario Outline:  Validate product sort by price <sort>
  When I will login as 'standard_user'
  And Sort the items by "<sort_order>"
  Then Validate all 6 items are sorted correctly by price "<sort_order>"
  Examples:
    |sort_order|expected_order|
    |Price (low to high)|'Sauce Labs Onesie','Sauce Labs Bike Light','','Sauce Labs Bolt T-Shirt','Test.allTheThings() T-Shirt (Red)','Sauce Labs Backpack','Sauce Labs Fleece Jacket'|
    |Price (high to low)|'Sauce Labs Fleece Jacket','Sauce Labs Backpack','Test.allTheThings() T-Shirt (Red)','Sauce Labs Bolt T-Shirt','Sauce Labs Bike Light','Sauce Labs Onesie'|

  Scenario Outline:  Validate product sort by alphabetically<sort>
  When I will login as 'standard_user'
  And Sort the items by "<sort_order>"
  Then Validate all items are sorted alphabetically by "<sort_order>"
  Examples:
    |sort_order|expected_order|
    |Name (A to Z)|'Sauce Labs Backpack','Sauce Labs Bike Light','','Sauce Labs Bolt T-Shirt','Sauce Labs Fleece Jacket','Sauce Labs Onesie','Test.allTheThings() T-Shirt (Red)'|
    |Name (Z to A)|'Test.allTheThings() T-Shirt (Red)','Sauce Labs Onesie','TSauce Labs Fleece Jacket','Sauce Labs Bolt T-Shirt','Sauce Labs Bike Light','Sauce Labs Backpack'|

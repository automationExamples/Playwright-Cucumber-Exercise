Feature: Product Sorting Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario Outline: Validate product sort by price <sort_type>
    When I will login as 'standard_user'
    And I sort the items by "<sort_type>"
    Then I validate all items are correctly sorted by "<sort_type>"
    And I click on logout

    Examples:
      | sort_type           | expected_order                                                                                                                                                  |
      | Price (high to low) | 'Sauce Labs Fleece Jacket', 'Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Bike Light', 'Test.allTheThings() T-Shirt (Red)', 'Sauce Labs Onesie' |
      | Price (low to high) | 'Sauce Labs Onesie', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Test.allTheThings() T-Shirt (Red)', 'Sauce Labs Backpack', 'Sauce Labs Fleece Jacket' |

  Scenario Outline: Validate product sort by a to z <sort_type>
    When I will login as 'standard_user'
    And I sort the items by "<sort_type>"
    Then I validate all items are correctly sorted by "<sort_type>"
    And I click on logout

    Examples:
      | sort_type | expected_order                                                                                                                                                  |
      | Name (A to Z) | 'Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)' |
      | Name (Z to A) | 'Test.allTheThings() T-Shirt (Red)', 'Sauce Labs Onesie', 'Sauce Labs Fleece Jacket', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Bike Light', 'Sauce Labs Backpack' |

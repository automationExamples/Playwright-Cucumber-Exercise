Feature: Product Sorting

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

  Scenario Outline: Validate product sort by ratings <sort_type>
    When I will login as 'standard_user'
    And I sort the items by "<sort_type>"
    Then I validate all items are correctly sorted by "<sort_type>"
    And I click on logout

    Examples:
      | sort_type          | expected_order                                                                                                                                                                |
      | Ratings (high to low) | 'Test.allTheThings() T-Shirt (Red)', 'Sauce Labs Fleece Jacket', 'Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Bike Light', 'Sauce Labs Onesie'             |
      | Ratings (low to high) | 'Sauce Labs Onesie', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Backpack', 'Sauce Labs Fleece Jacket', 'Test.allTheThings() T-Shirt (Red)'             |

  Scenario Outline: Validate product sort by availability <sort_type>
    When I will login as 'standard_user'
    And I sort the items by "<sort_type>"
    Then I validate all items are correctly sorted by "<sort_type>"
    And I click on logout

    Examples:
      | sort_type                 | expected_order                                                                                                                                                           |
      | Availability (in stock first)   | 'Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)'          |
      | Availability (out of stock first) | 'Test.allTheThings() T-Shirt (Red)', 'Sauce Labs Onesie', 'Sauce Labs Fleece Jacket', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Bike Light', 'Sauce Labs Backpack'         |

  Scenario: Validate product sort retains user preferences
    Given I will login as 'standard_user'
    And I sort the items by "Price (low to high)"
    When I log out and log back in
    Then I validate the items are still sorted by "Price (low to high)"
    And I click on logout

    Examples:
    | sort_order         | expected_order                                                                                               |
    | Price (low to high)| ['Sauce Labs Onesie', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Test.allTheThings() T-Shirt (Red)', 'Sauce Labs Backpack', 'Sauce Labs Fleece Jacket'] |

  Scenario: Validate product sort after adding items to cart
    Given I will login as 'standard_user'
    And I add the first item to the cart
    And I sort the items by "Name (A to Z)"
    Then I validate all items are sorted alphabetically by "Name (A to Z)"
    And I validate the first item is still in the cart
    And I click on logout

Examples:
    | expected_order                                                                                                  |
    | ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)'] |
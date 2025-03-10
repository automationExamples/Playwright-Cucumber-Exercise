Feature: Product Sorting Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario Outline: Validate product sort by price <sort_type>
    When I will login as 'standard_user'
    And I sort the items by "<sort_type>"
    Then I validate all items are correctly sorted by "<sort_type>"
    And I click on logout

    Examples:
      | sort_type           |                                                                                                                                                  
      | Price (high to low) | 
      | Price (low to high) | 

  Scenario Outline: Validate product sort by a to z <sort_type>
    When I will login as 'standard_user'
    And I sort the items by "<sort_type>"
    Then I validate all items are correctly sorted by "<sort_type>"
    And I click on logout

    Examples:
      | sort_type |
      | Name (A to Z) | 
      | Name (Z to A) | 

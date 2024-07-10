Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario Outline:  Validate product sort by price <sort>
    Then I will login as 'standard_user'
    When I Sort the items by '<sort>'
    And Validate all the items are sorted correctly by price '<sort>'
    Examples:
      | sort                |
      | Price (high to low) |
      | Price (low to high) |

  Scenario Outline:  Validate product sort by name <sort>
    Then I will login as 'standard_user'
    When I Sort the items by '<sort>'
    And Validate all the items are sorted correctly by name '<sort>'
    Examples:
      | sort          |
      | Name (A to Z) |
      | Name (Z to A) |
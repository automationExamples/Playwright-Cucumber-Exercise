Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario Outline:  Validate product sort by price <sort>
    When I login as "standard_user"
      And I sort the items by "<sort>"
    Then I should see the items are sorted by "<sort>"
    Examples:
      | sort                |
      | Price (high to low) |
      | Price (low to high) |
      | Name (A to Z)       |
      | Name (Z to A)       |

  Scenario Outline:  Validate cart shows correct number of items added
    When I login as "standard_user"
      And I add "<number>" items to the cart
    Then I should see the shopping cart badge shows "<number>" items added
    Examples:
      | number |
      | 1      |
      | 2      |
      | 5      |
      | 6      |
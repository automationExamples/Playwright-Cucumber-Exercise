Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  # Validate the Price (high to low) and Price (low to high) sort options (top-right) using a Scenario Outline
  Scenario Outline: Validate product sort by price <sort>
    Then I will login as 'standard_user'
    When I sort the items by "<sort>"
    Then I should see all 6 items sorted correctly by "<sort>"
    Examples:
      | sort                |
      | Price (low to high) |
      | Price (high to low) |

  Scenario Outline: Validate product sort by name <sort>
    Then I will login as 'standard_user'
    When I sort the items by "<sort>"
    Then I should see all 6 items sorted correctly by "<sort>"
    Examples:
      | sort          |
      | Name (A to Z) |
      | Name (Z to A) |

  Scenario: Validate the cart badge updates when an item is added
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    Then I should see 1 item in the cart badge

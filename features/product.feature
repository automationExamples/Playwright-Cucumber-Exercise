Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario Outline: Validate product sort by price
    Then I will login as 'standard_user'
    Then I sort products by "<sortOption>"
    Then the first product displayed should be "<expectedTopProduct>"
    Then the last product displayed should be "<expectedLastProduct>"

    Examples:
      | sortOption           | expectedTopProduct         | expectedLastProduct        |
      | Price (low to high)  | Sauce Labs Onesie          | Sauce Labs Fleece Jacket   |
      | Price (high to low)  | Sauce Labs Fleece Jacket   | Sauce Labs Onesie          |

  Scenario: Validate cart icon shows correct item count
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    Then the cart icon should show "1"

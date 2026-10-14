//CartFeature

Feature: Cart Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Cart badge updates after adding item
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    Then I should see cart badge count "1"

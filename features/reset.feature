Feature: Reset App State Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

 #New Scenario 2
  Scenario: Validate Reset App State
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart 
    Then I will verify the 'Sauce Labs Backpack' is added to cart
    Then I will click on Continue Shoppig button
    Then I will click on the Menu action bar
    Then I will click on Reset App State option
    Then I should see the cart is empty
 
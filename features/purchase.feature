Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
  Then I will select the cart on the top-right
  Then I will select Checkout
  Then I will fill in the First Name, Last Name, and Postal Code
  Then I will select Continue
  Then I will select Finish
  Then I should see the text 'Thank you for your order!'
 
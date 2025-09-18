Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page


  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
  Then Select the cart (top-right)
  Then  Select Checkout
  Then Fill in the First Name "Kirti", Last Name "Patel", and Postal Code "12345"
  Then Select Continue
  Then Select Finish
  Then Validate the text 'Thank you for your order!'
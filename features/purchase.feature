Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate successful purchase text
    Then I will login as 'standard_user'
    Then I will add the "backpack" to the cart
    Then Select the mini cart in header
    Then Select "Checkout" and validate url "https://www.saucedemo.com/checkout-step-one.html"
    Then Fill in the First Name "Jaime", Last Name "Guitron", and Zip or Postal Code "33556"
    Then Select "Continue" and validate url "https://www.saucedemo.com/checkout-step-two.html"
    Then Select "Finish" and validate url "https://www.saucedemo.com/checkout-complete.html"
    Then Validate the text 'Thank you for your order!'

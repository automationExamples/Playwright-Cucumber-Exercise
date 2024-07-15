Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate successful purchase text
    Then I will login as 'standard_user'
    Then I will add the "backpack" to the cart
    Then Select the mini cart in header
    Then Validate url "https://www.saucedemo.com/cart.html"
    Then Select "Checkout" btn
    Then Validate url "https://www.saucedemo.com/checkout-step-one.html"
    Then Fill in the checkout fields
      | firstName | Jaime   |
      | lastName  | Guitron |
      | zip       |   33556 |
    Then Select "Continue" btn
    Then Validate url "https://www.saucedemo.com/checkout-step-two.html"
    Then Select "Finish" btn
    Then Validate url "https://www.saucedemo.com/checkout-complete.html"
    Then Validate the text 'Thank you for your order!'

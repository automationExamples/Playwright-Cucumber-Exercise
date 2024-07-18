Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
    # TODO: Select the cart (top-right)
  Then I will Select the Cart
    # TODO: Select Checkout
  Then I will Select Checkout
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
  Then I will Fill in the "Aanal", "Patel", and "60107" Code 
    # TODO: Select Continue
  Then I Select Continue
    # TODO: Select Finish
  Then I Select Finish
    # TODO: Validate the text 'Thank you for your order!'
  Then I validate the text 'Thank you for your order!'
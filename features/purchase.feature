Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  When I will login as 'standard_user'
  And add the backpack to the cart
  # TODO: Select the cart (top-right) 
  And navigate to cart
  # TODO: Select Checkout
  When I will click on Checkout Button
  # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
  Then I will enter shipping details 'Johnny' 'Lever' '63367'
  # TODO: Select Continue
  When I click on Continue Button
  # TODO: Select Finish
  And I click on Finish Button
  # TODO: Validate the text 'Thank you for your order!'
  Then the message 'Thank you for your order!' should be displayed
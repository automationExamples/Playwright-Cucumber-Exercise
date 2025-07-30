Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
  # Added by Madhavi
  When I select the cart from top right  
  When I click on Checkout button
  Then verify that checkout page is displayed
  When I enter FirstName as 'Madhavi' and Last Name as 'J' and Zip Code as '23456'
  Then I click on "Continue" button
  Then I click on "Finish" button
  Then verify that "Thank you for your order!" message is displayed


    # TODO: Select the cart (top-right)
    # TODO: Select Checkout
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
    # TODO: Select Continue
    # TODO: Select Finish
    # TODO: Validate the text 'Thank you for your order!'
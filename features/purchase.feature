Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  When I will login as 'standard_user'
  And I will add the backpack to the cart
  # TODO: Select the cart (top-right)
  And Select the cart displayed at the top right
  Then I should see the page header "<pageHeader>"
  # TODO: Select Checkout/
  When I click the Checkout button
  # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
  And I fill in the 'FirstName' 'LastName' and 'Zip or Postal Code'
  # TODO: Select Continue
  And Cick on Continue button
  # TODO: Select Finish
  And I click the Finish button
  # TODO: Validate the text 'Thank you for your order!'
  Then I should see the Checkout Complete page with the text "Thank you for your order!"

  Examples:
    | pageHeader            | firstName | lastName | postalCode | 
    | Your Cart             | Oliver     | Trust   | 28027      |
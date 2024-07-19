Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
    # TODO: Login as 'standard_user'
  When I login as 'standard_user'
    # TODO: Add the backpack to the cart
  Then I will add the backpack to the cart
    # TODO: Confirm badge number
  Then I will validate the badge number on the cart
    # TODO: Select the cart (top-right)
  Then I will click on the cart
    # TODO: Select Checkout
  Then I will click on the checkout button
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
  Then I will fill in the details "John" "Doe" "12345"
    # TODO: Select Continue
  Then I will click on the continue button
    # TODO: Select Finish
  Then I will click on the finish button
    # TODO: Validate the text 'Thank you for your order!'
  Then I should see the message "Thank you for your order!"
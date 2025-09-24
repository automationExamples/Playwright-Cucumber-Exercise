Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  When I will login as 'standard_user'
  And I will add the backpack to the cart
    # TODO: Select the cart (top-right)
    # TODO: Select Checkout
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
    # TODO: Select Continue
    # TODO: Select Finish
    # TODO: Validate the text 'Thank you for your order!'
  And I will select the cart
  And I will proceed to checkout
  And I will fill in the checkout information with first name "John", last name "Doe", and zip code "12345"
  And I will continue to the next step
  And I will finish the purchase
  Then I should see the confirmation message "Thank you for your order!"
  
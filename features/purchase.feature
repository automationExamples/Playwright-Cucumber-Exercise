Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
    # TODO: Select the cart (top-right)
    # TODO: Select Checkout
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
    # TODO: Select Continue
    # TODO: Select Finish
    # TODO: Validate the text 'Thank you for your order!'

    Scenario: Validate successful purchase text
      Then I will login as 'standard_user'
      Then I will add the backpack to the cart
      Then I will open the cart
      Then I will proceed to checkout
      Then I will enter user details: "Vamsi", "Krishna", "49009"
      Then I will continue to the overview page
      Then I will finish the purchase
      Then I should see the confirmation message "Thank you for your order!"
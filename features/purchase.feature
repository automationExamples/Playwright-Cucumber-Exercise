Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  When I login as 'standard_user'
  And I add the backpack to the cart
  And I check out with the information:
  | firstname | Daria   |
  | lastname  | Britton |
  | zipcode   | 28105   |
  And I select Finish
  Then I should recieve the text "Thank you for your order!"
    # TODO: Select the cart (top-right)
    # TODO: Select Checkout
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
    # TODO: Select Continue
    # TODO: Select Finish
    # TODO: Validate the text 'Thank you for your order!'

#added negative scenario to improve coverage
  Scenario: Validate purchase fails when required fields are missing
  When I login as 'standard_user'
  And I add the backpack to the cart
  And I check out with the information:
      | firstname | Daria   |
      | lastname  |         |
      | zipcode   |         |
  Then I should receive the error message "Error: Last Name is required"
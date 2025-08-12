Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
  Then I will select the cart
    # TODO: Select the cart (top-right)
    Then I will select the checkOut
    # TODO: Select Checkout
    Then I will fill first last and zip code as "first Name" "Last Name " and "ZipCode"
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
    Then I will select the continue
    # TODO: Select Continue
    Then I will select the Finish
    # TODO: Select Finish
    Then I validate the text 'Thank you for your order!'
    # TODO: Validate the text 'Thank you for your order!'

    # Extend the testing coverage with anything I believe would be beneficial
    Then I selected "Logout" and verified that I am logged out 
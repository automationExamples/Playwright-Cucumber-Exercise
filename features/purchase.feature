Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  ## parameteruzed the item. we can pass any item here. accordingly xpath will be created
  Then I will add the 'BackPack' to the cart 
  Then I select the cart from the top-right corner

    # TODO: Select Checkout
  Then I select checkout

    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
  Then I fill in the First Name, Last Name, and Zip,Postal Code

    # TODO: Select Continue
  When I select continue

    # TODO: Select Finish
    # TODO: Validate the text 'Thank you for your order!'
  Then I select finish

    # TODO: Validate the text 'Thank you for your order!'
  Then I should see the text "Thank you for your order!"
    # TODO: Select the cart (top-right)
    # TODO: Select Checkout
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
    # TODO: Select Continue
    # TODO: Select Finish
    # TODO: Validate the text 'Thank you for your order!'
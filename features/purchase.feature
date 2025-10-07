Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login with 'standard_user'
  Then I will add the backpack to the shopping cart
    # TODO: Select the cart (top-right)
  Then I will Select the cart  
    # TODO: Select Checkout
  Then I will Select Checkout  
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
  Then I will fill customer information with
  |firstName |lastName |postalCode |
  |Alex      | Deo     |12345      |
    # TODO: Select Continue
  Then I will Select Continue 
    # TODO: Select Finish
  Then I will Select Finish   
    # TODO: Validate the text 'Thank you for your order!'
  Then I should see the confirmation message "Thank you for your order!" 
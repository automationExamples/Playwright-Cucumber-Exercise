Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page


  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
  And The User is able to select the click on cart
  And The User is able to select checout tab
  And The User navigate to customer details page
  And The User is able to Enter first Name "ABC"
  And The User is able to Enter Last Name "BDBD"
  And The User is able to Enter zip Code "123654"
  And The User is able to Click on finsih button
  And The USer is able to Validate Text Message "Thank you"




    # TODO: Select the cart (top-right)
    # TODO: Select Checkout
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
    # TODO: Select Continue
    # TODO: Select Finish
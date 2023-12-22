Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  When I will login as 'standard_user'
  And I will add the backpack to the cart
  And I will click the cart
  And I select checkout
  And I enter the firstName "Maheshwari" lastName "Allam" and postalcode "74112"
  And I select continue
  And I select finish
  Then I should see the order confirmation message "Thank you for your order!"
  When I click on back home
  And I click on logout
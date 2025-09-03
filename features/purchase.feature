Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
  Then I will select the cart
  Then I will select Checkout
  Then I will fill in the First Name as 'Jude'
  Then I will fill in the Last Name as 'Jang'
  Then I will fill in the Zip Code as '48335'
  Then I will select Continue
  Then I will select Finish
  Then I should see the message "Thank you for your order!"
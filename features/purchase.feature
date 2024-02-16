Feature: Purchase Feature

  Background:
    Given Open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  When User login as 'standard_user'
  And Add the backpack to the cart
  And Click on Cart
  And Click on Checkout Button
  And Enter the First Name as "Dhatravani", Last Name as "Haresamudra" and Zip or Postal Code as "77494"
  And Click on Continue Button
  And Click on Finish Button
  Then Should see the order confirmation message as "Thank you for your order!"

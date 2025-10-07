Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack item to the cart
  Then I will click on the cart 
  Then I will select checkout 
  Then I will fill in the first name, last name, zip_postal code
  Then I will select continue
  Then I will select finish
  Then I will validate the thank you message
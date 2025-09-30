Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
	Then I will login as 'standard_user'
	Then I will add the backpack to the cart
	Then I open the cart page
	Then I select Checkout
	Then I will enter required checkout information 'Anthony' 'Smith' '12345'
	Then I select Continue
	Then I select Finish
	Then I should see success text 'Thank you for your order!'
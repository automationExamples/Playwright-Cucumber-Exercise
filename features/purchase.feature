Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    Then I will click on the cart
    Then I will select Checkout
    Then I will fill in 'First Name', 'Last Name', and 'Zip/Postal Code'
    Then I will Continue
    Then I will finish the purchase
    Then I will validate the text 'Thank you for your order!'

  Scenario: Logout and validate the logout page title
    Then I will login as 'standard_user'
    Then I will logout
    Then I should see the title "Swag Labs"
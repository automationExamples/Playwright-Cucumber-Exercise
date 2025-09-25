Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate successful purchase text
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    Then I select the cart
    Then I select Checkout
    Then I fill in the First Name "John", Last Name "Doe", and Zip/Postal Code "12345"
    Then I select Continue
    Then I select Finish
    Then I should see the thank you text "Your order has been dispatched, and will arrive just as fast as the pony can get there!" 

  # Create a datatable to validate the Price (high to low) and Price (low to high) sort options (top-right) using a Scenario Outline
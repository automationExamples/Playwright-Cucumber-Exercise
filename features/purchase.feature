Feature: Purchase Feature

    Background:
        Given I open the "https://www.saucedemo.com/" page

    Scenario: Validate successful purchase text
        Then I will login as 'standard_user'
        Then I will add the backpack to the cart
        Then I select the cart
        Then I select Checkout
        Then I enter First Name "Swathi", Last Name "Jamma", and Zip Code "07304"
        Then I select Continue
        Then I select Finish
        Then I should see the purchase confirmation "Thank you for your order!"

    Scenario: Validate checkout error when first name is missing
        Then I will login as 'standard_user'
        Then I will add the backpack to the cart
        Then I select the cart
        Then I select Checkout
        Then I enter First Name "", Last Name "Jamma", and Zip Code "07304"
        Then I select Continue
        Then I should see the checkout error message "Error: First Name is required"
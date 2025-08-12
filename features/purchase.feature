Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    # Select the cart (top-right)
    Then I will select the top-right cart link
    # Select Checkout
    Then I will click the Checkout button
    # Fill in the First Name, Last Name, and Zip/Postal Code
    Then I will set First Name to 'DueOnTheFirst'
    Then I will set Last Name to 'NotTheLast'
    Then I will set Postal Code to '28202'
    # Select Continue
    Then I will click Continue
    # Select Finish
    Then I will click Finish
    # Validate the text 'Thank you for your order!'
    Then I will see the header message 'Thank you for your order!'
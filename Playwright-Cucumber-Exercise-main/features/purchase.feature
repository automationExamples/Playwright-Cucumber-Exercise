Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page
    And I will login as 'standard_user'

  Scenario Outline:  Validate successful purchase text
   When I add the backpack to the cart
    # TODO: Select the cart (top-right)
    And I click the cart at the top-right, validate the page header "<expectedHeader>", and validate the expected cart values of "<expectedCartName>" and "<expectedCartQuantity>"
    # TODO: Select Checkout
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
    # TODO: Select Continue
    And I click the Checkout button
    And I fill in the Checkout form with values "<firstName>", "<lastName>", and "<postalCode>" and click Continue
    # TODO: Select Finish
    # TODO: Validate the text 'Thank you for your order!'
    And I click the Finish button 
    Then I should see the Checkout Complete page with the header "Thank you for your order!" and the text "Your order has been dispatched, and will arrive just as fast as the pony can get there!"

     Examples:
    | expectedHeader            | expectedCartName    | expectedCartQuantity | firstName | lastName | postalCode | 
    | Your Cart                 | Sauce Labs Backpack | 1                    | Siva      | Vempati    | 12225   |

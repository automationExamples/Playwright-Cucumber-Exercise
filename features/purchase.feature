Feature: Purchase feature

  Scenario: Validate successful purchase text
    Given I am logged in as a standard user
    When I add a product to the cart
    And I proceed to checkout
    Then I should see the successful purchase text "Thank you for your order!"

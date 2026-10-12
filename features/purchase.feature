Feature: Purchase Feature
  As a shopper on Swag Labs
  I want to check out the items in my cart
  So that I can complete an order
 
  Background:
    Given I open the "https://www.saucedemo.com/" page
    And I will login as 'standard_user'
    And I will add the backpack to the cart
    And I will select the cart
    And I will select checkout
 
  @smoke
  Scenario: Validate successful purchase text
    Then I will fill in the checkout information with first name "John", last name "Doe", and zip "28202"
    Then I will select continue
    Then the order totals should add up
    Then I will select finish
    Then I should see the order confirmation text "Thank you for your order!"

  @negative
  Scenario Outline: Checkout requires a <field>
    Then I will fill in the checkout information with first name "<first>", last name "<last>", and zip "<zip>"
    Then I will try to continue
    Then I should see the checkout error message "<error>"
    Examples:
      | field       | first | last | zip   | error                          |
      | first name  |       | Doe  | 28202 | Error: First Name is required  |
      | last name   | John  |      | 28202 | Error: Last Name is required   |
      | postal code | John  | Doe  |       | Error: Postal Code is required |
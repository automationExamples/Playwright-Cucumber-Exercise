Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate successful purchase text
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    When I select the cart
    And I select Checkout
    And I fill in the First Name "Edwin", Last Name "Medina", and Zip/Postal Code "28202"
    And I select Continue
    And I select Finish
    Then I should see the text "Thank you for your order!"

  Scenario Outline: Validate checkout information is required: missing <field>
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    When I select the cart
    And I select Checkout
    And I fill in the First Name "<first>", Last Name "<last>", and Zip/Postal Code "<zip>"
    And I select Continue
    Then I should see the checkout error message "<error>"
    Examples:
      | field           | first | last   | zip   | error                          |
      | first name      |       | Medina | 28202 | Error: First Name is required  |
      | last name       | Edwin |        | 28202 | Error: Last Name is required   |
      | zip/postal code | Edwin | Medina |       | Error: Postal Code is required |

Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario Outline:  Validate successful purchase text
    When I login as "standard_user"
      And I add the backpack to the cart
      And I click on the cart
      And I click on "Checkout" button
      And I fill in "First Name": "<First Name>"
      And I fill in "Last Name": "<Last Name>"
      And I fill in "Zip/Postal Code": "<Zip/Postal Code>"
      And I click on "Continue" button
      And I click on "Finish" button
    Then I should see the text "Thank you for your order!" on the checkout complete page
    Examples:
      | First Name | Last Name | Zip/Postal Code |
      | John       | Doe       | 12345           |
      | Jane       | Smith     | 90210           |
      | William    | Brown     | 98765           |
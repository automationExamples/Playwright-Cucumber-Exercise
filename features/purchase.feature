Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario Outline: Validate successful purchase text with different users
    Then I will login as '<username>'
    Then I will add the backpack to the cart
    Then I will go to the cart
    Then I will checkout
    Then I will fill the checkout details with '<firstName>', '<lastName>', '<zip>'
    Then I will finish the purchase
    Then I should see the success message "Thank you for your order!"
    

    Examples:
      | username       | firstName | lastName | zip   |
      | standard_user  | nick    | tom      | 23456|
      | standard_user  | honey     | gold   | 70437 |
     
# Negative scenario
  Scenario Outline: Validate purchase fails with invalid checkout details
    Then I will login as '<username>'
    Then I will add the backpack to the cart
    Then I will go to the cart
    Then I will checkout
    Then I will fill the checkout details with '<firstName>', '<lastName>', '<zip>'
    Then I should see an error message '<errorMessage>'

    Examples:
      | username       | firstName | lastName | zip   | errorMessage                   |
      | standard_user  |          | jerry      | 13456 | Error: First Name is required  |
      | standard_user  | nick     |          | 83456 | Error: Last Name is required   |
      | standard_user  | nick     | jerry      |       | Error: Postal Code is required |
     
# After clicking on Cart, go to "Continue Shopping"
Scenario Outline: Validate "Continue Shopping" button in cart page.

 Then I will login as '<username>'
 Then I will add the backpack to the cart
 Then I will go to the cart
 Then I click on the Continue Shopping button
 Then I should be navigated to the product list page URL "https://www.saucedemo.com/inventory.html"


Examples:
      | username       | firstName | lastName | zip   |
      | standard_user  | nick    | tom      | 23456|
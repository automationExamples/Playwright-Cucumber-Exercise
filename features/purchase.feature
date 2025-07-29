Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario Outline: Validate successful purchase text
    Then I will login as 'standard_user'
    Then I will add the "<product>" to the cart
    Then Select the cart (top-right)
    Then Select Checkout
    Then Fill in the "<fName>", "<lName>", and "<zipCode>"
    Then Select Continue
    Then Select Finish
    Then Validate the text 'Thank you for your order!'
    
    Examples:
      | product  | fName      | lName       | zipCode |
      | backpack | Sreenivasa | Mirthivada  | 28273   |

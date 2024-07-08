Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario Outline:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart

  #By Anugna
  Then Select the cart (top-right)
   Then Select Checkout
 Then Fill in the <firstName>, <lastName> and <postalCode>
  Then Select Continue
   Then Select Finish
    Then Validate the text 'Thank you for your order!'

     Examples:  | firstName       | lastName       | postalCode |
                | Dummy FirstName | Dummy FastName | 34567 |
Feature: Purchase Feature

#[ ] Modify and extend the 'Validate successful purchase text' from [purchase.feature](features/purchase.feature#6) with steps for each comment listed. 
#Consider writing a new steps.ts file along with an appropriate page.ts
  Background:
    Given I open the "https://www.saucedemo.com/" page

Scenario Outline:  Validate successful purchase text for one or more items one by one
   # Then I will add the backpack to the cart  - Modified as below by Venkatesh Bellamkonda
   # TODO: Select the cart (top-right)
   # TODO: Select Checkout
   # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
   # TODO: Select Continue
   # TODO: Select Finish
   # TODO: Validate the text 'Thank you for your order!'
  When I login as 'standard_user'
  Then I add the "<product>" to the cart
  And  I click the cart
  And  I validate the cart details of "<product>"
  And  I select checkout
  And  I enter the firstName "James" lastName "Smith" and postalcode "27707"
  And  I select continue
  And  I validate the product "<product>" , quantity "1" and price "<Price>" details
  And  I select finish
  And  I should see the order confirmation message "Thank you for your order!"
  Then I logout
 
Examples:
| product     | Price  |
| Backpack    | $29.99 |
| Bike Light  | $9.99  |
| Onesie      | $7.99  |


Scenario:  Validate successful purchase details for mutliple items at once
  When I login as 'standard_user'
  Then I add the "Backpack" to the cart
  And  I add the "Onesie" to the cart
  And  I click the cart
  And  I validate the cart details of "Backpack"
  And  I validate the cart details of "Onesie"
  And  I select checkout
  And  I enter the firstName "James" lastName "Smith" and postalcode "27707"
  And  I select continue
  And  I validate the product "Backpack" , quantity "1" and price "$29.99" details
  And  I validate the product "Onesie" , quantity "1" and price "$7.99" details
  And  I select finish
  And  I should see the order confirmation message "Thank you for your order!"
  Then I logout

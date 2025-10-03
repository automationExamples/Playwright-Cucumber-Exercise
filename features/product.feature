Feature: Product Feature
 Background:
   Given I open the "https://www.saucedemo.com/" page
   Then I will login as 'standard_user'
  

  Scenario Outline: Validate product sort
   Then I will sort the products by "<sort>"
   Then I should verify all 6 products are sorted correctly by "<sort>"
    
  Examples:
    |sort                |
    | Price (low to high) |
    | Price (high to low) |
  

  Scenario: Verify filter dropdown options
  
  Then I print all filter dropdown options
  
Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page
    Then I will login as 'standard_user'

  Scenario: Validate successful purchase text
    Then I will add the backpack to the cart
    When I select the cart displayed at the top right     
    And I select the checkout button                        
    And I fill in the form with "testname" "testlname" "22310" 
    And I select the continue button                         
    And I select the finish button                          
    Then I should see the order confirmation message "Thank you for your order!" 
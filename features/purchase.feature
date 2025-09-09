Feature: Purchase Feature
  Background:
    Given I open the "https://www.saucedemo.com/" page
    Then I will login as 'standard_user'

  Scenario: Validate successful purchase text
    When I select the cart displayed at the top right     
    And I select the checkout button                        
    And I fill in the form with "testuser" "lastusername" "12847" 
    And I select the continue button                         
    And I select the finish button                          
    Then I should see the order confirmation message "Thank you for your order!" 
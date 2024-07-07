Feature: Login Feature

#[ ] Modify the scenario 'Validate the login page title' from [login.feature](features/login.feature#8) which runs but fails. 
#Determine the cause of the failure and update the scenario to pass in the test

#[ ] Extend the scenario 'Validate login error message' from [login.feature](features/login.feature#10) which runs and passes but is missing a step. 
#Extend the scenario to validate the error message received.

  Background:
    Given I open the "https://www.saucedemo.com/" page


  Scenario: Validate the login page title
    # TODO: Intentionally failing the scenario for screenshot purpose. 
    When I login as "standard_user"
    Then I should see the title "Swags Labs"
    Then I logout
  
  Scenario: Validate the login page title
    # TODO: Fix this failing scenario
    When I login as "standard_user"
    And I should see the title "Swag Labs"
    Then I logout

  Scenario: Validate login error message
   # TODO: Add a step to validate the error message received
    When I login as "locked_out_user"
    And I should see the login error message "Sorry, this user has been locked out."
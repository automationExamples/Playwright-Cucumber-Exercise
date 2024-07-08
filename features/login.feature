Feature: Login Feature

    Background:
        Given I open the "https://www.saucedemo.com/" page
    #In the existing scenario, login steps were not implementes and that's why it failed. 
    #Now it has login steps
    Scenario: Validate the login page title
        Then I login as "standard_user"
        Then I should see the title "Swag Labs"


    Scenario: Validate login error message
        Then I login as "locked_out_user"
        Then I should see the error message "Epic sadface: Sorry, this user has been locked out."

    Scenario Outline: Scenario Outline name: Validate the login page title for all the valid users
        Then I login as "<user>"
        Then I should see the title "Swag Labs"
        Then I logout
        Examples:
            | user         |
            | error_user   |
            | problem_user |
            | visual_users |


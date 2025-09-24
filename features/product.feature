Feature: Product Feature

  Background:
    Given I open the login page "https://www.saucedemo.com/"
    And I login with username "standard_user" and password "secret_sauce"

  Scenario Outline: Validate product sort by <sortOption>
    When I sort products by "<sortOption>"
    Then products should be sorted in "<order>" order

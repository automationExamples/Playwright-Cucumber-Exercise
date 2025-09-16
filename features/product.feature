Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  # Create a datatable to validate the Price (high to low) and Price (low to high) sort options (top-right) using a Scenario Outline
  Scenario Outline:  Validate product sort by <sortBy> in <order> order
    When I login as 'standard_user'
    And I sort by "<sortBy>" in "<order>" order
    Then I should see all items sorted by "<sortBy>" in "<order>" order

  Examples:
    | sortBy | order |
    | price  | desc  |
    | price  | asc   |
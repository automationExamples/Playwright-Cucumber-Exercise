Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  # Validate sorting by price using Scenario Outline and Examples
  Scenario Outline: Validate product sort by price <sortOption>
    When I login as 'standard_user'
    And I sort products by "<sortOption>"
    Then the products should be sorted in "<order>" order by price

    Examples:
      | sortOption           | order      |
      | Price (low to high)  | ascending  |
      | Price (high to low)  | descending |
    
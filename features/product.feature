Feature: Product Feature

Background:
    Given I open the "https://www.saucedemo.com/" page

Scenario Outline: Validate product sort by price <sort>
    Then I will login as 'standard_user'
    When I sort the products by "<sort>"
    Then the product prices should be sorted in "<order>" order

Examples:
    | sort                | order      |
    | Price (low to high) | ascending  |
    | Price (high to low) | descending |
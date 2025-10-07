Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

Scenario Outline: Validate product sort by price <sort>
Then I will login as 'standard_user'
Then I will validate the prices are sorted low to high
Then I will validate the prices are sorted high to low

Examples:
| sort | order |
| Price (low to high) | ascending |
| Price (high to low) | descending |
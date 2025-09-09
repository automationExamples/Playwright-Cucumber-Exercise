Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate product sort by <sort>
  # Login step
  Then I will login as 'standard_user'
  # Sorting perform step
  Then I will sort the items by "<sort>"
  # Validation step to check sorting
  Then I should see the items sorted by "<sort>"

  # The Examples table 
  Examples:
    | sort |
    | Price (low to high) |
    | Price (high to low) |

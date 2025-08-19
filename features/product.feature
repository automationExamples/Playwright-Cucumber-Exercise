Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate product sort by <sort>
  # Step to log in as a standard user
  Then I will login as 'standard_user'
  # Step to perform the sorting action using the specified sort option
  Then I will sort the items by "<sort>"
  # Step to validate that the items are sorted as expected
  Then I should see the items sorted by "<sort>"

  # The Examples table provides the values for <sort>, so the scenario runs twice: once for each sort option
  Examples:
    | sort |
    | Price (low to high) |
    | Price (high to low) |

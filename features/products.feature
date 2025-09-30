Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  # Create a datatable to validate the Product Aplhabatically (AtoZ) and (ZtoA) sort options (top-right) using a Scenario Outline
  
  Scenario Outline:  Validate product sort alphabetically  <sort>
  Then I will login using valid userid 'standard_user'
  When I sort products by "<sort>"
  Then The products should be sorted alphabetically in "<order>" order
  Examples:
    # TODO: extend the datatable to paramterize this test
    | sort |order|
    | az   | asc  |
    | za   | desc |
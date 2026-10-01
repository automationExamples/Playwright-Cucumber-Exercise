Feature: Product Feature

    Background:
        Given I open the "https://www.saucedemo.com/" page

    Scenario Outline: Validate product sort by price
        Then I will login as 'standard_user'
        When I sort the items by "<sort>"
        Then I validate all 6 items are sorted correctly by price "<direction>"

        Examples:
            | sort                | direction  |
            | Price (low to high) | ascending  |
            | Price (high to low) | descending |

    Scenario Outline: Validate product sort by name
        Then I will login as 'standard_user'
        When I sort the items by "<sort>"
        Then I validate all 6 items are sorted correctly by name "<direction>"

        Examples:
            | sort          | direction  |
            | Name (A to Z) | ascending  |
            | Name (Z to A) | descending |
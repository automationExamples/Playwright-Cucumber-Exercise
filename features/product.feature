Feature: Product Feature

    Background:
        Given I open the "https://www.saucedemo.com/" page

    Scenario Outline:  Validate product sort by price
        Then I login as "standard_user"
        Then I Sort the items by "<sort>"
        Then I Validate all six items are sorted correctly by "<sort>"
        Examples:
            | sort                |
            | Price (low to high) |
            | Price (high to low) |

    Scenario Outline:  Validate product sort by name
        Then I login as "standard_user"
        Then I Sort the items by "<sort>"
        Then I Validate all six items are sorted correctly by "<sort>"
        Examples:
            | sort          |
            | Name (A to Z) |
            | Name (Z to A) |
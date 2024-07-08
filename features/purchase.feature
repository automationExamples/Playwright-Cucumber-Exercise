Feature: Purchase Feature

    Background:
        Given I open the "https://www.saucedemo.com/" page
        Then I login as "standard_user"

    Scenario:  Validate successful purchase text
        Then I add the "backpack" to the cart
        Then I Select the cart
        Then I Select Checkout
        Then I fill out my information
        Then I Select Continue
        Then I Select Finish
        Then I Validate the text "Thank you for your order!"

    Scenario Outline:  Validate successful purchase text for each item
        Then I add the "<item>" to the cart
        Then I Select the cart
        Then I Select Checkout
        Then I fill out my information
        Then I Select Continue
        Then I Select Finish
        Then I Validate the text "Thank you for your order!"
        Examples:
            | item          |
            | backpack      |
            | bike-light    |
            | bolt-shirt    |
            | fleece-jacket |
            | onesie        |
            | t-shirt-red   |

    Scenario:  Validate successful purchase text for multiple items
        Then I add the "backpack" to the cart
        Then I add the "bike-light" to the cart
        Then I Select the cart
        Then I Select Checkout
        Then I fill out my information
        Then I Select Continue
        Then I Select Finish
        Then I Validate the text "Thank you for your order!"



Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
# Added check to select the cart button
  Then I will select the cart button
# Added check to select the checkout button
  Then I will select the checkout button
# Added check to fill in the checkout form
  Then I will fill in the checkout form with "John", "Doe", and "12345"
# Added check to select the continue button
  Then I will select the continue button
# Added check to select the finish button
  Then I will select the finish button
# Added check to validate the successful purchase text
  Then I should see the text "Thank you for your order!"
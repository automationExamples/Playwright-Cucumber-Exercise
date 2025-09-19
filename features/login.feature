Feature: Login Feature

  Scenario: Validate the login page
    Given I navigate to sauce demo page
    When I will validate login error message by using 'locked_out_user'
    Then I will login as 'standard_user' for purchase
    Then I will add the product to the cart
    And I purchase the product
    Then I should see the purchased text message

  # Scenario: Validate login error message
  #   Then I will login as 'locked_out_user'
    # TODO: Add a step to validate the error message received
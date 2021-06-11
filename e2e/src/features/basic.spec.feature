Feature: Change screen text color
  This feature lets a user to set the color of the screen's content

  @ColorScenario
  Scenario: Set screen color to red
    Given I am on the home page
    When I click on "RedActionButton"
    Then The "Screen" should display "Red"

  # FAILS
  @ColorScenario
  Scenario: Set screen color to green
    # Given I am on the home page
    When I click on "GreenActionButton"
    Then The "Screen" should display "Purple"

  # FAILS
  @ColorScenario
  Scenario: Set screen color to blue
    # Given I am on the home page
    When I click on "BlueActionButton"
    Then The "Screen" should display "Blue"
    And The "BlueActionButton" should have class "is-not-pushed"

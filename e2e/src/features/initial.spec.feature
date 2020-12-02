Feature: Check initial selected color
  This feature checks if the initial color

  @InitialScenario
  Scenario: Check initial Color is Blue
    Given I am on the home page
    Then The "Screen" should display "Blue"
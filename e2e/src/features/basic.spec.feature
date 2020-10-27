Feature: Change screen text color
    This feature lets a user to set the color of the screen's content

    @TypeScriptScenario
    Scenario: Set screen color to red
        Given I am on the home page
        When I click on "RedActionButton"
        Then The "Screen" should display "Red"

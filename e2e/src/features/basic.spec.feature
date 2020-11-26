Feature: Change screen text color
    This feature lets a user to set the color of the screen's content

    @TypeScriptScenario
    Scenario: Set screen color to red
        Given I am on the home page
        When I click on "RedActionButton"
        Then The "Screen" should display "Red"

    @TypeScriptScenario
    Scenario: Set screen color to green
        Given I am on the home page
        When I click on "GreenActionButton"
        Then The "Screen" should display "Green"

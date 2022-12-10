Feature: Login Feature

  Scenario: User Successfully Login With Registered Mobile Number
    Given User on Traveloka App onboarding
    And User click Log in button in Traveloka Homepage
    When User signing in to Traveloka app
    Then User on Traveloka homepage
    
Feature: carRental

  Scenario: User successfully search car rental from Traveloka App
    Given User on Traveloka App Homepage
    And User click Car Rental on car homepage
    And User click with driver
    And User click select location
    When User click search button
    Then User will navigate to cars in Jakarta page
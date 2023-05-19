Feature: Booking.com website - booking process

    Background:
        Given The user is on Home page

    Scenario: As a user, I can proceed with placing order, stop the booking process and navigate back to home page
        When  the user perform country selection
        Then the country should be changed to UK
        When  the user perform currency selection
        Then the currency should be changed to USD
        When  the user click on Stays tab
        Then the tab should be changed to Stays
        When  the user enter the <location>
        And the user selects check in and check out dates
        And the user select adults and child count
        Then the location should be selected as <message>
        When user clicks on 5 star rating
        And User filters price lowest products
        And User selects second product on the list
        Then Selected product details should be similar to product list item
        When user selects Rooms count and proceed
        Then checkout, checkin dates and amount should be same
        When user enters firstname,lastname and email and click Next
        Then entered details should be same
        When user dismisses the alert
        Then alert should not be present

        Examples:
            | location     | message                            |
            | Nuwara Eliya | Nuwara Eliya: 403 properties found |









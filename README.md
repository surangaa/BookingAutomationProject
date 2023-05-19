# BookingAutomationProject

This project includes a basic flow automation of Booking.com official website. Webdriverio and cucumber is used in implmentation

## Prerequisites to setup project
install and setup Node
install an IDE (preferably VS Code)
install and setup Maven


## Steps to run the code
Clone the repository
Open the project in IDE
To run the featurefile -> npx wdio --spec .\features\{{bookingplacement.feature}}

## Issues faced
Faced difficulty in locating some elements as they were not having any unique attribute such as id, name or aria attribute.
Workaround - try to find the xpath of the elements. For this install 'Chropath' browser extension and find xpath to uniquely loacte an element.

Observed that between some steps, there should be a wait time in order to load the page or elements.
Workaround - having a additional test step with browser.pause()

Parameterization test url.
workaround - 

## Challenges

an modal dialog appears on booking.com site randomly when going to select country. Had to handle the modal dialog and close it before proceeding with the next steps. 
Since this modal dialog appears randomly, test wait until that modal appears. Therefore, it takes additional time to execute test.

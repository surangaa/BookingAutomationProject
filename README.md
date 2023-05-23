# BookingAutomationProject

This project includes a basic flow automation of Booking.com official website. Webdriverio and cucumber is used in implmentation

## Prerequisites to setup project
install and setup Node
install an IDE (preferably VS Code)


## Steps to run the code
clone the reporsitory -  git clone https://github.com/surangaa/BookingAutomationProject.git
Open the project in IDE
run a 'npm install' to install all the dependencies
To run the test -> npm run test/ npm run testsuite / npm run bookingfeature 
(to run the project in firefox use -> npm run test:firefox)

## Issues faced

1. Faced difficulty in locating some elements as they were not having any unique attribute such as id, name or aria attribute.

*Workaround -*
- $$ is used to fetch multiple elements on the page and get them to an array and use index of array element to access a specific element.
- try to find the xpath of the elements. For this install 'Chropath' browser extension and find xpath to uniquely loacte an element.

2. Observed that between some steps, there should be a wait time in order to load the page or elements.

*Workaround -* having a additional test step with browser.pause()

3. Parameterization test url.

*Workaround -* had a seperate file as url.js with the urls and read the specific property in 'common.page.js' page.


## Challenges

- an modal dialog appears on booking.com site randomly when going to select country. Had to handle the modal dialog and close it before proceeding with the next steps. 




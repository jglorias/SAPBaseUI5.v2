# SAPBaseUI5
Old name was NodebaseUI5.

By Janet Gloria and Christian Joseph - 2023

This project was created as one of our internship projects during our time at Commsult AG. This project involves using SAPUI5 and Firebase. 

# Dependencies
 - **Make sure to have SAP UI5's Library Downloaded on your IDE**
 Just run this command in the Terminal: `npm install --global @ui5/cli` 
 After downloading it, you can run `ui5 --help` to confirm your installation, just to see if it works. It should print out a help page in the terminal if it was downloaded successfully. 
  - **Make sure you have npm in your system as well**
 We need npm to install the dependencies of the app to successfully run it. You can download npm from the [official Node.js](https://nodejs.org/en/download) website through the Node.js installer. 

# Running the Project

 1. Run `npm install` in the terminal after opening the project with your favorite IDE to download additional dependencies.
 2. Navigate to the folder just 1 folder before the "webapp" folder as it requires to read some of the files outside of webapp to run (such as package.json, ui5.yaml, etc)
 3. Run `ui5 serve` and navigate to **localhost:8080/index.html** to see the magic work!
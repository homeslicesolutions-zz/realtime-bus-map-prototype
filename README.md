# Realtime Bus Map Prototype
Creating a Realtime Bus Map using React/Redux with Satori APIs

NOTE: Use ```yarn``` over NPM if you're on a Windows machine.  I had issues with installing ```react-scripts``` on Windows with NPM 5.  Try running ```npx yarn``` or if you already have yarn just run ```yarn``` 

Few key points:
* Portland TriMap was chosen to be used
* Redux was used to store data and UI state (filtering)
* Added some color references per route for extra credit
* Stuck to my personal boilerplaty standard of how I usually compose and construct a React/Redux application
* Clicking on Table or Buses will filter to that specific Route
* To clear out filter, re-click on the active filtered Route or Bus
* The only tests written are Redux reducer tests to make sure the injected data is kosher
* Redux Dev Tools can be used to see the Redux store (note that it's constantly being update due to the API subscription push)
* Improvements: add proptypes, enzyme tests, nightwatch tests

Questions: joe.vu@homeslicesolutions.com


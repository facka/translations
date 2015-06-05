# translations
Manage translations from google spreadsheet

## Summary
In this porject I will explain how to achieve translations for a web page in an easy and fast way

## Technologies Used
* Google spreadsheets
* Gulp
* NodeJS

## Steps

1. Create a google spreadsheet
 * Publish it to the web. [How to publish a doc]( https://support.google.com/docs/answer/37579?hl=en)
 * Make the spreadsheet public in to the Web by Sharing it and enabling access to anyone.
 * Get spreadsheet example from [ here ] (https://docs.google.com/spreadsheets/d/1I09LNjHawLEXulHbL_cYC5xk4UbcRakZ_O3CuvOs6Jg)
 * The javascript format is [here] (https://docs.google.com/spreadsheets/d/1I09LNjHawLEXulHbL_cYC5xk4UbcRakZ_O3CuvOs6Jg/gviz/tq). We will use this file to create our own JSON format later, using a gulp task.

 * Install the add on [ Translate my sheet ] (https://chrome.google.com/webstore/detail/translate-my-sheet/ikbffjfknllcipddomhgdhcedikhiaga)

2.  Create a GULP task
 * Get the example code from the repo. It's a nodeJS script that parses the json and builds a file for each language in JSON format
 * The format of the result file is like this: 

```javascript
{ 
  "code" : "transalted value", 
  "code1" : "transalted value"
  ...
}
```
 * Edit the GULP tasks translate.js if you add more languages in the spreadsheet or if you want to change the destination folder.




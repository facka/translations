# translations
Manage translations from google spreadsheet

## Summary
In this porject I will explain how to achieve translations for a web page in an easy and fast way

## Technologies Used
* Google spreadsheets
* Gulp
* AngularJS

## Steps

1. Create a google spreadsheet and make it public to the web. [How to publish a doc]( https://support.google.com/docs/answer/37579?hl=en)
 * Get spreadsheet example from [ here ] (https://docs.google.com/spreadsheets/d/1I09LNjHawLEXulHbL_cYC5xk4UbcRakZ_O3CuvOs6Jg)
 * The javascript format is [here] (https://docs.google.com/spreadsheets/d/1I09LNjHawLEXulHbL_cYC5xk4UbcRakZ_O3CuvOs6Jg/gviz/tq). We will use this file to create our own JSON format later, using a gulp task.

 * Install the add on [ Translate my sheet ] (https://chrome.google.com/webstore/detail/translate-my-sheet/ikbffjfknllcipddomhgdhcedikhiaga)

2.  Create a GULP task
 * Get the example code from the repo. It's a nodeJS script that parses the json and builds a file for each language in JSON format
 * The format is like this: 

```javascript
{ 
  "code" : "transalted value", 
  "code1" : "transalted value"
  ...
}
```





'use strict';
/*global require*/
/*global console*/


var gulp = require('gulp');
var request = require('request');
var _eval = require('eval');
var fs = require('fs');


//Columns positions
var translationMaps = {
  en: '1',
  es: '2',
  it: '3',
  fr: '4',
  pt: '5',
  de: '6',
  ru: '7',
  jp: '8'
};

var DESTINATION_FOLDER = 'languages/';

var URL = "https://docs.google.com/spreadsheets/d/1I09LNjHawLEXulHbL_cYC5xk4UbcRakZ_O3CuvOs6Jg/gviz/tq";

function columnToJSON(rows, column) {
  var result = {};
  for (var i in rows) {
    var row = rows[i].c;
    if (row[column] && row[column].v) {
       result[row[0].v] = row[column].v;
    }
  }
  return JSON.stringify(result,null,2);
}

gulp.task('translate', function () {
  return request({
    url: URL
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var res = _eval('var response; var google = {visualization: { Query: { setResponse: function(arg) { response = arg;}}}}; '+body+'exports.data = response');
      var rows = res.data.table.rows;

      for ( var languageCode in translationMaps) {
        var result = columnToJSON(rows, translationMaps[languageCode]);
        try {
          fs.writeFileSync(DESTINATION_FOLDER + languageCode + '.json', result);
        }
        catch (err) {
          console.log('Error saving "' +  DESTINATION_FOLDER + languageCode + '.json". Check if the folder "' + DESTINATION_FOLDER + ' "exists');
        }
      }
    }
    else {
      console.log('Error on request to "' + URL + '": ' + error);
    }
  });
});



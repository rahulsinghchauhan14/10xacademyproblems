Tweak:
search the content from the file

Code:
fs.readFile(FILE_LOCATION, function (err, data) {
  if (err) throw err;
  if(data.indexOf('search string') >= 0){
   console.log(data) //Do Things
  }
});

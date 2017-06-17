$(function() {
	
var test = {
  "one": "Singular sensation",
  "two": "Beady little eyes",
  "three": "Little birds pitch by my doorstep"
}
$.getJSON("test.js", function( json ) {
  console.log( "JSON Data: " + json.users[2].name );
 });
});
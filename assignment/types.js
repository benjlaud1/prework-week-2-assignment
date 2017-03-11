// We've created a website called "The Doubler"
// the website accepts a bunch of different inputs from our user
// we accept strings and numbers and booleans and objects and try to double them
// and expect output of the type
var aNumber = 8;
var aString = "Week2!";
var aBoolean = true;
var anArray = ['First array' , 209 , true];
var nonObject;

function theDoubler (someInput) {
	// typeof is a built in javascript tool that allows us to find the type of an object
    // for number, we have given an example of how that works
	if (typeof someInput === "number") {
	   // if type is number, log that number multiplied by 2
		console.log('doubled: ' + (someInput * 2));
	} else if (typeof someInput === "string")
	{
		// if type is string pass back that string twice
		// e.g. sending "someString" in, should log "someStringsomeString"

		console.log(someInput + someInput);
	} else if (typeof someInput === "boolean" && someInput === true) {
		console.log('Super-duper true');
	} else if (typeof someInput === "boolean" && someInput === false){
		console.log("I won't double this");
	} else if (typeof someInput === "object") {
		console.log('everything is an object');
	} else {
		console.log("I can't double this");
	}
	// if the user inputs a boolean (true or false)
	// log "I won't double this" if it is false
	// log "Super-duper true" if it is true
	// if it's none of those, but it is an object, log "everything is an object"
	// if it is anything else, print out "I can't double this"

}

theDoubler(aNumber);
theDoubler(aString);
theDoubler(aBoolean);
theDoubler(anArray);
theDoubler(nonObject);

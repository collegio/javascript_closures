/*

	Learn to Code JavaScript: Lesson 5
	Closures

	Let's look at how we can use closures to create new functions on the fly!
	As we looked at in class, let's create our tech support platform.

*/

var loginTechSupport = function(dept, repName) { 
	var lineNumber = 1;

	return function(customerName) { 
		console.log('Hello '+customerName+', my name is '+repName+' and I’ll be helping you with '+dept+' tonight. You are currently in line spot number '+lineNumber); 
		lineNumber++;
	};
};

// Bill and Kelly are here to provide print and web support!
var printTechSupport = loginTechSupport('Print', 'Bill');
var webTechSupport = loginTechSupport('Web', 'Kelly');

// Our first customers, Rob, Jason and Natasha!
printTechSupport('Rob');
webTechSupport('Jason');
webTechSupport('Natasha');

// More customers require support, they need to get in line!
printTechSupport('Jennifer');
webTechSupport('Mark');
webTechSupport('John');


/******************************************

EXCEPTION HANDLING

******************************************/

// Let's look at a very basic example of exception handling:
// If you try and use an undeclared variable, you will get a ReferenceError that will shut
// down your program. let's use a try/catch block to prevent our program from shutting
// down

try {
	console.log(variableNotPresent);
}
catch(e) {
	console.log("We just caught an error that would have shut down our program. Here is the error:");
	console.log(e);
}

console.log("This line will print if the script didn't shut down!");
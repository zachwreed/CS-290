// ------------------------------------------------------------
// Author: 	Zachary Reed
// Class:  	CS290-400
// Date:	7/8/2018
// Description: function declarations
// ------------------------------------------------------------

// Part 1: call function before declaration

var val = square_root(4);
console.log(val);

function square_root(a){
	return Math.sqrt(a);
}

// Part 2: declare and call var to be function before assigning
var var_funct;
 
 // call before assigning var 
 console.log("Before assigning function var and attempting call..")
var_funct();

var_funct = function (){
	console.log("Function call succeeded");
}

console.log("After assigning function var and attempting call..");
var_funct();
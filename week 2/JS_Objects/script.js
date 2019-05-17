// ------------------------------------------------------------
// Author: 	Zachary Reed
// Class:  	CS290-400
// Date:	7/8/2018
// Description: deep equal comparator 
// ------------------------------------------------------------

console.log("Deep Comparison");

function deepEqual(obj_1, obj_2)
{
	// check values for recursion below
	if (obj_1 === obj_2){
		return true;
	}
	
	if ((obj_1 == null || typeof obj_1 != "object") || (obj_2 == null || typeof obj_2 != "object")) {
		return false;
	}
	
	var obj_1_arr = [];
	var obj_2_arr = [];
	var comp_bool = false;
	
	// create array for obj_1 properties
	for ( var prop in obj_1) {
		obj_1_arr.push(prop);
	}
	
	// create array for obj_2 properties
	for ( var prop in obj_2) {
		obj_2_arr.push(prop);
	}
	
	if (obj_1_arr.length != obj_2_arr.length) {
		return false;
	}
	
	else {
		for (var i = 0; i < obj_1_arr.length; i++){
			var prop = obj_1_arr[i];
			
			if (!(prop in obj_2) || !deepEqual(obj_1[prop], obj_2[prop])){ // if prop in obj_2, recurse call 
            return false;
			}
		}
		return true;
	}
}

let obj = {here: {is: "an"}, object: 2}; // "property name: property value" pairing
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
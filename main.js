// 1. Miles-Kilometers Conveter (Operators):
// . Create a Variale named miles and assign a numeric value representing distance in miles. 
// . Calculate the equivalent distance in kilometers using the conversion factor (1 miles 1.60934 kilometers). You can acheive this by
//   multiplying miles by 1.60934.
// . Store the converted distance in kilometers in a variable named kilometers.
// . Use console.log to print a message in the following format.
// The distance of 130 kms in equal to 209.2142 miles.
var miles = 130;
var kilometers = miles * 1.60934;
console.log("The distance of ".concat(kilometers.toFixed(4), " kms is equal to ").concat(miles, " miles."));

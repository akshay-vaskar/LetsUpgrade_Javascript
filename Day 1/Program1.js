//Question 1 : Program to search for a particular character in a string

//Taking a string from user
let str = prompt("Enter a string");

//Taking a character to be seraching in the string from the user
let char = prompt("Enter the character to be searched in the string");
  
//Printing the index of the character 
//Returns -1 if the character is not found
console.log(`The character ${char} is present at `+ str.search(char)); 

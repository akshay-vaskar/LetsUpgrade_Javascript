// Question 3 : Program to search for a element in a array of strings

//User entering the array of string
let arr_size = prompt("Enter the size of array");
let arr = new Array();
for (let i = 0; i < arr_size; i++) {
    arr[i] = prompt("Enter the string " + (i + 1));
}

//checking if string is present in the array
let element = prompt("Enter the element to be searched in array:");
let x = false;
for (let i = 0; i < arr_size; i++) {
    if (arr[i] == element) {
        x = true;
        break;
    }
}

//showing output
if (x) 
    console.log( `${element} string is present`);
else 
    console.log( `${element} string is not present in the array`);

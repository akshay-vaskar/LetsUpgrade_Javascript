// Question 5: Print an array in reverse order

let arr_size = prompt("Enter size of the array");
let arr = new Array();
for (var i = 0; i < arr_size; i++) {
	arr[i] = prompt("Enter array elements "+(i+1));
}

for (let i = arr_size -1; i >= 0; i--) {
	console.log(arr[i]);
}

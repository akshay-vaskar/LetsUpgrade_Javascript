// Question 4 :Program to display only elements containing 'a' in them from a array

let data =["laptop","mouse","keyboard","monitor","camera","joystick","lan wire"];

let str = "a";

for(let i=0;i<data.length;i++)
{
    let x =data[i];
    for(let j=0;j<x.length;j++)
    {
    if(x[j]==str)
        console.log(data[i]); 
    }
}

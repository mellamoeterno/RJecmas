//destructuring is kinda doing Array accessing but 
//creating a variable and retrieving the specific data from the array
const numbers = [0,1,2,3,4,5,6];

// const letters = [lol,sal,dolor,stiff];

const [a,b,c, ...rest] = numbers;

//this is assigning the value from inside the other variable above, 'numbers' to the newly created variables inside
//the brackets respectively it seems like.

//if in doubt in the future just change the value rom the console.log, it'll show the change from the elements from 
//the variable 'numbers' being assigned to the variables inside the brackets.

//not sure about how the ...rest works, which is a parameter.

const arrayAccess = a; //this a'int too necessary for anything, but whatever ig.

console.log(b);

//"a" its a variable and the values from the 'numbers' are assigned to all the elements inside the brackets
//respectively, this is called destructuring. 


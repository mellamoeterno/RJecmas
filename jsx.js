//destructuring is kinda doing Array accessing but 
//creating a variable and retrieving the specific data from the array
const numbers = [0,1,2,3,4,5,6];

// const letters = [lol,sal,dolor,stiff];

const [a,b,c, ...rest] = numbers;

const arrayAccess = a[1];

console.log(a);

//"a" its not a variable, understand this bs latter.
//Exercises
//Exercise 1: Basic Types with function Parameters
function add(a: number, b: number) {
  return a + b;
}
const result = add(1, 2);
console.log(result);

//Exercise 2: Annotating Empty Parameters
const concatTwoStrings = (a: "Hello", b: "World") => {
  return [a, b].join(" ");
};
const results = concatTwoStrings("Hello", "World");
console.log(results);

//Exercise 3: The basic types
let example1: string = "hello world!";
let example2: number = 42;

//Exercise 4: the any type
const handleFormData = (e: any) => {
  e.preventDefault();

  const data = new FormData(e.terget); // e.terget! Whoops!

  const value = Object(data.entries());

  return value;
};

//Object Literal types
//Exercise 1:Object Literal types
const concatName = (user: { first: string; last: string }) => {
  return `${user.first} ${user.last}`;
};

//Exercise 2: Optional Property types
const concatNames = (user: { first: string; last?: string }) => {
  if (!user.last) {
    return user.first;
  }

  return `${user.first} ${user.last}`;
};

//Type Aliases
//Exercise
type Rectangle={
  width:number;
  height:number;
};
const getRectangleArea=(rectangle: Rectangle) =>{
  return rectangle.width * rectangle.height;
};
const getRectanglePerimeter=(rectangle:Rectangle)=>{
  return 2*(rectangle.width + rectangle.height);
};

//ARRAYS AND TUPLES
//Exercise 1: Array Type
type ShoppingCart ={
  userId: string;
  items: string[];
}
const processCart= (cart: ShoppingCart)=>{

};
processCart({
  userId: "user123",
  items:["item1","item2","item3"],

});
//Exercise 2: Arrays of Objects
type Ingredient={
  name: string;
  quantity: string;
};
type Recipe={
  title:string;
  instructions: string;
  //ingredient:Array<Ingredient>;
};
const processRecipe=(recipe:Recipe)=>{

};
processRecipe({
  title:"chocolate chip cookies",
  //ingredient;[{name: "flour", quantity:"2cups"}],

  instructions: "..."


});
//Exercise 3 :Tuple
const setRange=(range:[number, number])=>{
  const x=range[0];
  const y=range[1];
}
//Exercise 4: Optional members of Tuples
const goToLocation=(coordinates:[number,number,number | undefined]) =>{
  const latitude=coordinates[0];
  const longitude= coordinates[1];
  const elevation = coordinates[2];
}
//or
const goToLocation1=(
  coordinates:[latitude: number, longitude:number, elevation?: number],
) =>{};

// Passing type to functions
//Exercise 1: Passing Types to Map
type User={
  name: string;
  age:number;
};
const userMap = new Map<number, User>();
//or
const UserMap= new Map<number, { name: string; age: number}>();

//Exercise 2: JSON.parse( can't receive type arguments)
const parsedData:{
  name:string;
  age:number;
} =JSON.parse('{"name": "Alice", "age":30}');

//Typing Functions
//Exercise 1: Optional Function Parameters
const concatName =(first:string, last:string)=>{
  if(!last){
    return first;
  }
  return '${first} ${last}';
};
const result= concatName("John", "Doe");
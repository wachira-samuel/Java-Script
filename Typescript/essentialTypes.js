"use strict";
//Exercises
//Exercise 1: Basic Types with function Parameters
function add(a, b) {
    return a + b;
}
const result = add(1, 2);
console.log(result);
//Exercise 2: Annotating Empty Parameters
const concatTwoStrings = (a, b) => {
    return [a, b].join(" ");
};
const results = concatTwoStrings("Hello", "World");
console.log(results);
//Exercise 3: The basic types
let example1 = "hello world!";
let example2 = 42;
//Exercise 4: the any type
const handleFormData = (e) => {
    e.preventDefault();
    const data = new FormData(e.terget); // e.terget! Whoops!
    const value = Object(data.entries());
    return value;
};
//Object Literal types
//Exercise 1:Object Literal types
const concatName = (user) => {
    return `${user.first} ${user.last}`;
};
//Exercise 2: Optional Property types
const concatNames = (user) => {
    if (!user.last) {
        return user.first;
    }
    return `${user.first} ${user.last}`;
};
const getRectangleArea = (rectangle) => {
    return rectangle.width * rectangle.height;
};
const getRectanglePerimeter = (rectangle) => {
    return 2 * (rectangle.width + rectangle.height);
};
const processCart = (cart) => {
};
processCart({
    userId: "user123",
    items: ["item1", "item2", "item3"],
});
const processRecipe = (recipe) => {
};
processRecipe({
    title: "chocolate chip cookies",
    //ingredient;[{name: "flour", quantity:"2cups"}],
    instructions: "..."
});
//Exercise 3 :Tuple
const setRange = (range) => {
    const x = range[0];
    const y = range[1];
};
//Exercise 4: Optional members of Tuples
const goToLocation = (coordinates) => {
    const latitude = coordinates[0];
    const longitude = coordinates[1];
    const elevation = coordinates[2];
};
//or
const goToLocation1 = (coordinates) => { };
const userMap = new Map();
//or
const UserMap = new Map();
//Exercise 2: JSON.parse( can't receive type arguments)
const parsedData = JSON.parse('{"name": "Alice", "age":30}');
//Typing Functions
//Exercise 1: Optional Function Parameters
const concatName = (first, last) => {
    if (!last) {
        return first;
    }
    return '${first} ${last}';
};
const result = concatName("John", "Doe");

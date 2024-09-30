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

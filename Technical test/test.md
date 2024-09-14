## 1. List the properties of a JavaScript object

    var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
    };

    console.log(Object.keys(student).join(','));

## 2. Delete the **rollno** property from the object and print before/after.

    var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
    };

    console.log("Before deleting:", student);

    delete student.rollno;

    console.log("After deleting:", student);

## 3. Get the length of a JavaScript object.

    var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
    };

    console.log(Object.keys(student).length);

## 4. Display the reading status of books in the library

    var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },

  
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
     },
  
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }
    ];

    library.forEach(book => {
    console.log(`${book.title} by ${book.author}, Reading Status: ${book.readingStatus}`);
    });

## 5. Return a subset of a string

    function getSubsets(str)

    {
    let subsets = [];
    for (let i = 0; i < str.length; i++)
    {
  
    for (let j = i + 1; j <= str.length; j++)
    {
      subsets.push(str.slice(i, j));
    }
    }
    return subsets;
    }

    console.log(getSubsets("dog"));

## 6. Sort an array of JavaScript object by **libraryID**

    var library = [
    {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
    },
  
    {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
    },
  
    {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
    }
    ];

    library.sort((a, b) => b.libraryID - a.libraryID);

    console.log(library);

## 7. Print all methods in a JavaScript object

    function all_properties(obj) 
    {
    return Object.getOwnPropertyNames(obj).filter(prop => typeof obj[prop] === 'function');
    }

    console.log(all_properties(Array));

## 8. Parse a URL

    function parseURL(url)
    {
    var parser = document.createElement('a');
    parser.href = url;
    return {
    protocol: parser.protocol,
    hostname: parser.hostname,
    pathname: parser.pathname,
    search: parser.search,
    hash: parser.hash
    };
    }

    console.log(parseURL[]("https://www.example.com:8080/path/name?query=string#hash"));

## 9. Retrieve all down and inherited properties of an object

    function getAllProperties(obj)
    {
    let properties = [];
    for (let prop in obj) {
    properties.push(prop);
    }
    return properties;
    }

    console.log(getAllProperties(Object));

## 10. Retrieve all values of an object's properties

    function getObjectValues(obj) 
    {
    return Object.values(obj);
    }

    var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
    };

    console.log(getObjectValues(student));

## 11. convert an object into a list of **[key,value]** pairs

    function objectToPairs(obj) 
    {
    return Object.entries(obj);
    }

    var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
    };

    console.log(objectToPairs(student));

## 12. Get a copy of the objects where keys become values and values become keys

    function invertObject(obj) 
    {
    let inverted = {};
    for (let key in obj) {
    inverted[obj[key]] = key;
    }
    return inverted;
    }

    var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
    };

    console.log(invertObject(student));

## 13. check if an object contains a given property

    function hasProperty(obj, prop)
     {
    return obj.hasOwnProperty(prop);
    }

    var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
    };

    console.log(hasProperty(student, "rollno")); // true
    console.log(hasProperty(student, "age"));    // false

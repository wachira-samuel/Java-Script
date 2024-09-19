// Advance Use of Rest and Spread Operators

//1. filterAndSort Function
function filterAndSort(filterFn, ...numbers){
    return numbers.filter(filterFn).sort()

}
//test case
const isEven=(num) => num % 2 === 0;
console.log(filterAndSort(isEven, 5,3,8,6,2));

//2. mergeobjects Function
function mergeObjects(...objs){
    const obj=Object.assign({},...objs)
    return obj
}
//test case
const obj1={a:1, b:2 };
const obj2={b:3, c:4 };
console.log(mergeObjects(obj1, obj2));

//3.combineArrays Function
function combineArrays(...arrays){
    return [...new Set(arrays.flat())];

}

//test case
const arr1=[1,2,3];
const arr2=[3,4,5];
const arr3=[5,6,7];

console.log(combineArrays(arr1, arr2,arr3))

//4extractproperties Function
function extractProperties(objects, ...properties){
    return objects.map(obj => {
        let newObj = {};
        properties.forEach(prop => {
          if (prop in obj) {
            newObj[prop] = obj[prop];
          }
        });
        return newObj;
      });
  

}

//test case
const objects=[{a:1,b:2,c:3}, {a:4, b:5,c:6}];
console.log(extractProperties(objects, 'a','c'))
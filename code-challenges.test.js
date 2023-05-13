// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
const colors1 = ["purple", "blue", "green", "yellow", "pink"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

describe("shuffleOffTheFirst", () => {
  it("removes the first value in an array and rearranges the rest", () => {
    
    // checks if result includes expected subset in any order, but does not check that first value is not included. Both of our test arrays would pass this with no manipulation, since our outcome will be a subset of the original. However we do need this to remaing true.
    expect(shuffleOffTheFirst(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(shuffleOffTheFirst(colors2)).toEqual(expect.arrayContaining(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]))
    
    // checks if first value in original array does not exist in expected array
    expect(shuffleOffTheFirst(colors1)).toEqual(expect.not.arrayContaining(["purple"]))
    expect(shuffleOffTheFirst(colors2)).toEqual(expect.not.arrayContaining(["chartreuse"]))
    
    //currently does not test if actually randomized, will continue and come back to solve
   
    //coming back to solve this now!
    //imperfect option - checks for randomization but will fail if randomized order is equal to original order. ran 20 times failed twice (removed test w colors1 to reduce false fails), not perfect but better than not having a test for randomization. Should only fail 1/(5!) times now

    // expect(shuffleOffTheFirst(colors2)).not.toEqual(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"])
    
  })
})

//

// good fail!     ReferenceError: shuffleOffTheFirst is not defined


// b) Create the function that makes the test pass.

//in - array
//out - random order array without original first value
//process - write a function which removes an arrays first value and shuffles remaining items. Possible tools - .slice, .sort, Math.random, map(value, index) (was considering .filter(.map) but I think slice is more optimal)

// Not pseudocode, just thinking through. would remove in production environment
// // // sort with a math.random? not sure how to do that 
// // // what I know: the .sort() syntax I'm used to will consistently shift numbers left or right - not randomly - and does this based on negative or positive ((a,b)a-b, shifts to sort largest to smallest based on negative or positive). So maybe I need a mix of randomized +- results? to shift left or right randomly
// // // math.random gives me .1 through 1 with the .ceil, which is all positive. If I add a *-1 it will give me -1 through -.1
// // // integers confusing me so *10 and I have 1 - 10 and -10 - -1
// // // can I shift it halfway? if I have like -5 to +5 could I put that in a sort somehow? for a, b -> randomize result? I think it would just shift the resulting amuont?
// // // okay I think I'm just going to try without the *10 now that I see it better and subtract integer wise I guess
// // // still not working, reviewing how these built-ins work
// // // took off math.ceil and it works

//create and name a function which intakes an array
const shuffleOffTheFirst = (array) => {
  // Slice the array from the 1 index to the end, returning all values after the first one as an array.
  // sort randomly. Sort (a,b) usually determines shifting by a positive or negative result from a-b. This code randomly generates a positive or negative value by shifting the Math.random range (normally 0 - 1) half a step down (-.5 to 0.5) without tying it to the a or b value, so the shifting of a and b is randomly left or right as .sort iterates through the array
  return array.slice(1).sort((a, b) => Math.random()-0.5)
}

// console.log("test 1:", shuffleOffTheFirst(colors1));
// console.log("test 2:", shuffleOffTheFirst(colors2));
//I know from this log that I'm actually randomizing, but I also know that my original arrays will currently test as a pass with a slice but no randomization. I'll be coming back to that later.
//already found option, fix tests for randomization but causes occassional false fall

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("voteCount", () => {
  it("tallies net vote count from an object", () => {
    expect(voteCount(votes1)).toEqual(11)
    expect(voteCount(votes2)).toEqual(-31)
  })
})

// good fail!     ReferenceError: voteCount is not defined


const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

//in - object 
//out - net votes as number
//process - create a function which takes in an object, accesses the information stored, subtracts downvotes from upvotes, and returns the result

//create a function named voteCount which takes in an object
const voteCount = (object) => {
  //access upvotes in object, access and subtract downvotes
  return object.upVotes - object.downVotes
}
// console.log("test1:", voteCount(votes1))
// console.log("test2:", voteCount(votes2))

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("uniqueArray", () => {
  it("takes in two arrays, combines them, and eliminates duplicates", () => {
    expect(uniqueArray(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// good fail!     ReferenceError: uniqueArray is not defined

const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

//in - two arrays with some duplicate values
//out - one array with no duplicate values
//process - create a function which takes in two arrays, combines them, eliminates duplicates, and returns one array with unique values

//create a function called uniqueArray which takes two arrays as input
const uniqueArray = (array1, array2) => {
  //combine the two arrays into one
  let comboArray = [...array1, ...array2]
  //filter the combined array so that only unique values are returned - indexOf will find the index of the first instance of a value, so this will keep only values which are indexed at the indexOf index. Return this result
  return comboArray.filter((value, index, array) => array.indexOf(value) === index)
}
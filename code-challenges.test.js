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

describe("shuffleOffTheFirst", () => {
  it("removes the first value in an array and rearranges the rest", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    const expected1 = ["yellow", "blue", "pink", "green"]
    const expected2 = ["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    
    // checks if result includes expected subset in any order, but does not check that first value is not included. Both of our test arrays would pass this with no manipulation, since our outcome will be a subset of the original. However we do need this to remaing true.
    expect(colors1.toEqual(
      expect.arrayContaining(expected1)))
    expect(colors2.toEqual(
      expect.arrayContaining(expected2)))

    // checks if first value in original array does not exist in expected array
    expect(colors1).toEqual(
      expect.not.arrayContaining("purple"))
    expect(colors2).toEqual(
      expect.not.arrayContaining("chartreuse"))

  })
})

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
// // // okay I think I'm just going to try without the *10 now and subtract integer wise I guess

//create and name a function which intakes an array
// const shuffleOffTheFirst = (array) => {
//   //slice the array from the 1 index to the end, effectively removing first value. 
//   return array.slice(1).sort((a, b) => Math.ceil(Math.random()-0.5))
// }

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

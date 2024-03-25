// !javascript array methods
// *********/******* */
// !pop
// !shift
// !unshift
// !push
// !splice
// !slice
// !array map
// !array filter


// *******************************

//***main array
const player = ["messi", "ronaldo", "neymar", "mbappe", "hazard", "kane"]
console.log(player)

// *The pop() method removes the last element from an array:
player.pop()
console.log("pop", player)

// *The shift() method removes the first element from an array:
player.shift()
console.log("shift", player)

// *The unshift() method adds new items to the beginning of an array:
player.unshift("cutinho")
console.log("unshift", player)

// *The push() method adds one or more elements to the end of an array:
player.push("silva")
console.log("push", player)

// *The splice() method adds new items to an array
// The splice() method returns an array with the deleted items:
player.splice(1, 1, "ronaldinho")
console.log("splice add", player)

//With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
player.splice(1, 2)
console.log("splice remove", player)

// The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.
const spliced = player.toSpliced(0, 1);
console.log("toSpliced", spliced)

// *The slice() method slices out a piece of an array into a new array:
// Slice out a part of an array starting from array element 1 ("cutinho"):
const player2 = player.slice(1);
console.log("slice", player2)

// Slice out a part of an array starting from array element 3 ("Apple"):
const play2 = player.slice(3);
console.log("slice out", play2)

// The method then selects elements from the start argument, and up to (but not including) the end argument
const play = player.slice(0, 3);
console.log("slice multipul", play)

// **array map

// *The map() method creates a new array with the results of calling a provided function on every element in the calling array.
const player3= ["Messi", "ronaldo", "Nyemar", "mbappe", "hazard", "kane"];
const callBack= function (element, index) {
    console.log(element, index)    
    return element.toUpperCase();
}
const newPlayer3= player3.map(callBack);
console.log("array map",newPlayer3)
// *****

// anonymous function
const newP= player3.map((element, index) => {
    console.log(element, index)    
    return element.toLowerCase();
})
console.log("array map lower",newP)
// ......

//* The filter() method creates a new array with array elements that pass a test.
const newArray = player3.filter((element) => {
      if (element === "kaka") {
        return true;
      } else {
        return false;
      }
    });
    
    console.log(newArray);

// ...
//** */ The reduce() method runs a function on each array element to produce (reduce it to) a single value.
const numbers = [50, 50, 96, 11, 10];

function calBack(old, newVal) {
  return old * newVal;
}

const sum = numbers.reduce(calBack,1);

console.log(sum);



// **The filter() method creates a new array with array elements that pass a test.**
const ages = [3, 10, 18, 20,56];
function checkAge(age) {
  return age > 18;
}

const filtered = ages.filter(checkAge)

console.log(filtered)

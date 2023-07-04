function hasTargetSum(array, target) {
  // Write your algorithm here
  let start = 0;
  let end = array.length;
  let mid = Math.floor((start + end) / 2);

  while(start <= end)

    if (array[mid] === target) return target;

    if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }



/* 
  Write the Big O time complexity of your function here
  O(log n) -> binay search 
*/

/* 
  Add your pseudocode here
  create a function with array and target as parameters
  iterate through the array to find two values that sum to the target 
  return 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

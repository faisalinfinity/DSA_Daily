let fs = require("fs");
let input = fs.readFileSync(0, "utf-8");
input = input.trim().split("\n");

let n = +input[0];
let arr = input[1].trim().split(" ").map(Number);

let new_arr = [];
let index = 0;
let count = 0;
gs(new_arr, arr, index);
console.log(count);
function gs(new_arr, arr, index) {
  if (new_arr.length != 0) {
    let sum = new_arr.reduce((acc, el) => {
      return acc + el;
    }, 0);

    if (sum % 2 != 0) {
      count++;
    }
  }
  if (index == arr.length) {
    return;
  }
  for (let i = index; i < arr.length; i++) {
    new_arr.push(arr[i]);
    gs(new_arr, arr, i + 1);
    new_arr.pop();
  }
}

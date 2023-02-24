

//Enter code here
let fs=require("fs")
let input=fs.readFileSync(0,"utf-8").split("\n")
let tc=+input[0]
line=1
for(let i=0;i<tc;i++){
    n=+input[line++]
    arr=input[line++].trim().split(" ").map(Number)
    console.log(rob(arr))
}

function rob(houses) {
  const memo = new Array(houses.length).fill(-1);
  return robHelper(houses, houses.length - 1, memo);
}

function robHelper(houses, i, memo) {
  if (i < 0) {
    return 0;
  } else if (i === 0) {
    return houses[0];
  } else if (i === 1) {
    return Math.max(houses[0], houses[1]);
  } else if (memo[i] !== -1) {
    return memo[i];
  } else {
    const robCurrentHouse = houses[i] + robHelper(houses, i - 2, memo);
    const skipCurrentHouse = robHelper(houses, i - 1, memo);
    memo[i] = Math.max(robCurrentHouse, skipCurrentHouse);
    return memo[i];
  }
}
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

 

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output: 
// [
// [1,2,2],
// [5]
// ]
 

// Constraints:

// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30
////////124/176 test cases
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let sum1=candidates.reduce((acc,i)=>acc+i,0)
    if(sum1<target){
        return []
    }
    
    let ans=[]
    let obj={}
    candidates.sort((a,b)=>a-b)
    dfs(candidates,[],0,target)

     function dfs(cand,sub,index,t){
        let sum=sub.reduce((acc,i)=>acc+i,0)
           if(sum==t){
              if(obj[sub]==undefined){
                  ans.push([...sub])
                     obj[sub]=1
              }
        
           }
        
        
        if(index==cand.length){

            return
        }
        for(let i=index;i<cand.length;i++){
            if(cand[i]>t)break;
            sub.push(cand[i])
            dfs(cand,sub,i+1,t)
            sub.pop()
        }

     }

   
     return ans

    
};
////////////172///////////
let sum1=candidates.reduce((acc,i)=>acc+i,0)
    if(sum1<target||target==""){
        return []
    }
    
   function dfs(start, path, target) {
    if (target === 0) {
      if (!res.some(a => a.join() === path.join())) res.push(path);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > target) break;
      dfs(i + 1, path.concat(candidates[i]), target - candidates[i]);
    }
  }

  let res = [];
  candidates.sort((a, b) => a - b);
  dfs(0, [], target);
  return res;  
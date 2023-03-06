function twoArrayAndSum(n, m, matrix, s){
    //write code here
    let count=0
     for (let i = 0; i < n; i++) {
    for (let j = 0; j <= m - 3; j++) {
      if (matrix[i][j] + matrix[i][j+1] + matrix[i][j+2] === s) {
       count++;
      }
    }
  }

  // check vertically
  for (let i = 0; i <= n - 3; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] + matrix[i+1][j] + matrix[i+2][j] === s) {
        count++;
      }
    }
  }

  // check diagonally (top-left to bottom-right)
  for (let i = 0; i <= n - 3; i++) {
    for (let j = 0; j <= m - 3; j++) {
      if (matrix[i][j] + matrix[i+1][j+1] + matrix[i+2][j+2] === s) {
        count++;
      }
    }
  }

  // check diagonally (bottom-left to top-right)
  for (let i = 2; i < n; i++) {
    for (let j = 0; j <= m - 3; j++) {
      if (matrix[i][j] + matrix[i-1][j+1] + matrix[i-2][j+2] === s) {
        count++;
      }
    }
  }
  
  console.log(count)
  
}

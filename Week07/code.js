// 括号生成
var generateParenthesis = function(n) {
  let res = []
  let dfs =(curStr, left, right, res) => {
      if (left === 0 && right === 0) {
          res.push(curStr)
          return
      }
      if (left > right) {
          return
      }
      if (left > 0) {
          dfs(curStr + '(', left - 1, right, res)
      }
      if (right > 0) {
          dfs(curStr + ')', left, right - 1, res)
      }
  }
  dfs('', n,n,res)
  return res
};

// 岛屿数量
var numIslands = function(grid) {
  if (grid.length === 0) {return []}
  let row = grid.length
  let col = grid[0].length
  let count = 0
  for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
          if (grid[i][j] === '1') {
              count++
              dfs(grid, i, j)
          }
      }
  }
  return count
};

var dfs = function(grid, r, c) {
      let nr = grid.length;
      let nc = grid[0].length;
      grid[r][c] = '0';
      if (r - 1 >= 0 && grid[r-1][c] == '1') dfs(grid, r - 1, c);
      if (r + 1 < nr && grid[r+1][c] == '1') dfs(grid, r + 1, c);
      if (c - 1 >= 0 && grid[r][c-1] == '1') dfs(grid, r, c - 1);
      if (c + 1 < nc && grid[r][c+1] == '1') dfs(grid, r, c + 1);
}
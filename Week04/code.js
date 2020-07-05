// 单词接龙
var ladderLength = function(beginWord, endWord, wordList) {
  let setWordList = new Set(wordList)
  let queue = [[beginWord, 1]]
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  while(queue.length) {
      let [node, count] = queue.shift()
      if (node === endWord) {return count}
      for (let i = 0; i < node.length; i++) {
          for (let j = 0; j < alpha.length; j++) {
              let str = node.slice(0,i) + alpha[j] + node.slice(i+1)
              if (setWordList.has(str)) {
                  queue.push([str, count + 1])
                  setWordList.delete(str)
              }
          }
      }
  }
  return 0
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
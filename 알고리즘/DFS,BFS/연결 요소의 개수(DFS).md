# 연결 요소의 개수

## 문제
방향 없는 그래프가 주어졌을 때, 연결 요소 (Connected Component)의 개수를 구하는 프로그램을 작성하시오.
<br/>
<br/>

## 입력
첫째 줄에 정점의 개수 N과 간선의 개수 M이 주어진다. (1 ≤ N ≤ 1,000, 0 ≤ M ≤ N×(N-1)/2) 둘째 줄부터 M개의 줄에 간선의 양 끝점 u와 v가 주어진다. (1 ≤ u, v ≤ N, u ≠ v) 같은 간선은 한 번만 주어진다.
<br/>
<br/>

## 출력
첫째 줄에 연결 요소의 개수를 출력한다.
<br/>
<br/>

## 예제 입력 1
6 5<br/>
1 2<br/>
2 5<br/>
5 1<br/>
3 4<br/>
4 6


<br/>

## 예제 출력 1
2


<br/>
<br/>

## 예제 입력 2
6 8<br/>
1 2<br/>
2 5<br/>
5 1<br/>
3 4<br/>
4 6<br/>
5 4<br/>
2 4<br/>
2 3


<br/>

## 예제 출력 2
1


<br/>
<br/>

## 나의 Solution

```javascript
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

let n = 0;
let m = 0;
let arr = [];
let ch = [];
let path = [];
answer = 0;

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  [n, m] = input[0].split(" ").map(Number);
  arr = Array.from(Array(n + 1), () => Array());
  ch = Array.from({ length: n + 1 }, () => 0);
  for (let i = 1; i <= m; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    arr[x].push(y);
    arr[y].push(x);
  }
  for (let i = 1; i <= n; i++) {
    if (ch[i] === 0) {
      dfs(i);
      answer++;
    }
  }
  console.log(answer);
  process.exit();
});

function dfs(L) {
  if (ch[L] === 1) {
    return;
  } else {
    ch[L] = 1;
    for (let i = 0; i < arr[L].length; i++) {
      if (ch[arr[L][i]] === 0) {
        dfs(arr[L][i]);
      }
    }
  }
}
```

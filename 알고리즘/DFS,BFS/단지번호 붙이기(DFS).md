# 단지 번호 붙이기

## 문제

<그림 1>과 같이 정사각형 모양의 지도가 있다. <br/>
1은 집이 있는 곳을, 0은 집이 없는 곳을 나타낸다. 철수는 이 지도를 가지고 연결된 집의 모임인 단지를 정의하고, 단지에 번호를 붙이려 한다. 여기서 연결되었다는 것은 어떤 집이 좌우, 혹은 아래위로 다른 집이 있는 경우를 말한다. 대각선상에 집이 있는 경우는 연결된 것이 아니다. <그림 2>는 <그림 1>을 단지별로 번호를 붙인 것이다. 지도를 입력하여 단지수를 출력하고, 각 단지에 속하는 집의 수를 오름차순으로 정렬하여 출력하는 프로그램을 작성하시오.<br/>
![image](https://user-images.githubusercontent.com/68778883/165517298-e4339d09-7f5d-43ab-8173-11fa55c2a25c.png)

<br/>
<br/>

## 입력
첫 번째 줄에는 지도의 크기 N(정사각형이므로 가로와 세로의 크기는 같으며 5≤N≤25)이 입력되고, 그 다음 N줄에는 각각 N개의 자료(0혹은 1)가 입력된다.

<br/>
<br/>

## 출력
첫 번째 줄에는 총 단지수를 출력하시오. 그리고 각 단지내 집의 수를 오름차순으로 정렬하여 한 줄에 하나씩 출력하시오.

<br/>
<br/>

## 예제 입력1
7<br/>
0110100<br/>
0110101<br/>
1110101<br/>
0000111<br/>
0100000<br/>
0111110<br/>
0111000

<br/>
<br/>

## 예제 출력1
3<br/>
7<br/>
8<br/>
9

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
let graph = [];
let answer = [];
let cnt = 0;
let home = 0;
let n = Number.MAX_SAFE_INTEGER;
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  n = Number(input[0]);
  graph = Array.from(Array(n), () => Array(n).fill(0));
  input = input.slice(1);
  for (let i = 0; i < n; i++) {
    graph[i] = input[i].split("").map((ele) => Number(ele));
  }
  solution();
  process.exit();
});

function solution() {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === 1) {
        graph[i][j] = 0;
        cnt++;  //단지의 갯수 세기
        dfs(i, j);
        answer.push(home);
        home = 0; 
      }
    }
  }

  function dfs(x, y) {
    graph[x][y] = 0;
    home++;//단지 안에 집 개수 세기
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && graph[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }
  }
  answer.sort((a, b) => a - b);
  answer.unshift(cnt);
  answer.map((ele) => console.log(ele));
}
```
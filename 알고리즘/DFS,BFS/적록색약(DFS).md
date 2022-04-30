# 적록색약(10026)

## 문제

적록색약은 빨간색과 초록색의 차이를 거의 느끼지 못한다. 따라서, 적록색약인 사람이 보는 그림은 아닌 사람이 보는 그림과는 좀 다를 수 있다.

크기가 N×N인 그리드의 각 칸에 R(빨강), G(초록), B(파랑) 중 하나를 색칠한 그림이 있다. 그림은 몇 개의 구역으로 나뉘어져 있는데, 구역은 같은 색으로 이루어져 있다. 또, 같은 색상이 상하좌우로 인접해 있는 경우에 두 글자는 같은 구역에 속한다. (색상의 차이를 거의 느끼지 못하는 경우도 같은 색상이라 한다)

예를 들어, 그림이 아래와 같은 경우에

```
RRRBB
GGBBB
BBBRR
BBRRR
RRRRR
```

적록색약이 아닌 사람이 봤을 때 구역의 수는 총 4개이다. (빨강 2, 파랑 1, 초록 1) 하지만, 적록색약인 사람은 구역을 3개 볼 수 있다. (빨강-초록 2, 파랑 1)

그림이 입력으로 주어졌을 때, 적록색약인 사람이 봤을 때와 아닌 사람이 봤을 때 구역의 수를 구하는 프로그램을 작성하시오.

<br/>
<br/>

## 입력

첫째 줄에 N이 주어진다. (1 ≤ N ≤ 100)

둘째 줄부터 N개 줄에는 그림이 주어진다.
<br/>
<br/>

## 출력

첫째 줄에 장마철에 물에 잠기지 않는 안전한 영역의 최대 개수를 출력한다.
<br/>
<br/>

## 예제 입력 1

5<br/>
RRRBB<br/>
GGBBB<br/>
BBBRR<br/>
BBRRR<br/>
RRRRR

<br/>

## 예제 출력 1

4 3

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
let sy = [];
let ch = [];
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
answer = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  n = Number(input[0]);
  for (let i = 1; i <= n; i++) {
    //입력 구역을 배열에 저장

    //정상인의 배열
    graph.push(input[i].split(""));
    //적록색약의 배열
    sy.push(input[i].replace(/R/g, "G").split(""));
  }
  //정상인 그래프로 DFS
  solution(n, graph);
  //적록색약 그래프로 DFS
  solution(n, sy);

  //출력
  console.log(answer.join(" "));
  process.exit();
});

function solution(n, arr) {
  let ch = Array.from(Array(n), () => Array(n).fill(0));
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (ch[i][j] === 0) {
        ch[i][j] = 1;
        cnt++;
        dfs(arr[i][j], i, j);
      }
    }
  }

  function dfs(t, x, y) {
    ch[x][y] = 1;

    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      //텍스트 값이 다르면 돌지 않음
      if (nx < 0 || ny < 0 || nx >= n || ny >= n || ch[nx][ny] === 1 || arr[nx][ny] !== t) {
        continue;
      } else {
        ch[nx][ny] = 1;
        dfs(t, nx, ny);
      }
    }
  }
  answer.push(cnt);
}
```

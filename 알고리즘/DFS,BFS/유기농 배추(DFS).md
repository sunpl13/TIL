# 유기농 배추

## 문제

차세대 영농인 한나는 강원도 고랭지에서 유기농 배추를 재배하기로 하였다. 농약을 쓰지 않고 배추를 재배하려면 배추를 해충으로부터 보호하는 것이 중요하기 때문에, 한나는 해충 방지에 효과적인 배추흰지렁이를 구입하기로 결심한다. 이 지렁이는 배추근처에 서식하며 해충을 잡아 먹음으로써 배추를 보호한다. 특히, 어떤 배추에 배추흰지렁이가 한 마리라도 살고 있으면 이 지렁이는 인접한 다른 배추로 이동할 수 있어, 그 배추들 역시 해충으로부터 보호받을 수 있다. 한 배추의 상하좌우 네 방향에 다른 배추가 위치한 경우에 서로 인접해있는 것이다.

한나가 배추를 재배하는 땅은 고르지 못해서 배추를 군데군데 심어 놓았다. 배추들이 모여있는 곳에는 배추흰지렁이가 한 마리만 있으면 되므로 서로 인접해있는 배추들이 몇 군데에 퍼져있는지 조사하면 총 몇 마리의 지렁이가 필요한지 알 수 있다. 예를 들어 배추밭이 아래와 같이 구성되어 있으면 최소 5마리의 배추흰지렁이가 필요하다. 0은 배추가 심어져 있지 않은 땅이고, 1은 배추가 심어져 있는 땅을 나타낸다.
| | | | | | | | | | |
|--|--|--|--|--|--|--|--|--|--|
|1|1|0|0|0|0|0|0|0|0|0|0|0|0|
|0|1|0|0|0|0|0|0|0|0|0|0|0|0|
|0|0|0|0|1|0|0|0|0|0|0|0|0|0|
|0|0|0|0|1|0|0|0|0|0|0|0|0|0|
|0|0|1|1|0|0|0|0|0|0|0|1|1|1|
|0|0|0|0|1|0|0|0|0|0|0|1|1|1|

<br/>
<br/>

## 입력

입력의 첫 줄에는 테스트 케이스의 개수 T가 주어진다. 그 다음 줄부터 각각의 테스트 케이스에 대해 첫째 줄에는 배추를 심은 배추밭의 가로길이 M(1 ≤ M ≤ 50)과 세로길이 N(1 ≤ N ≤ 50), 그리고 배추가 심어져 있는 위치의 개수 K(1 ≤ K ≤ 2500)이 주어진다. 그 다음 K줄에는 배추의 위치 X(0 ≤ X ≤ M-1), Y(0 ≤ Y ≤ N-1)가 주어진다. 두 배추의 위치가 같은 경우는 없다.
<br/>
<br/>

## 출력

1번 컴퓨터가 웜 바이러스에 걸렸을 때, 1번 컴퓨터를 통해 웜 바이러스에 걸리게 되는 컴퓨터의 수를 첫째 줄에 출력한다.
<br/>
<br/>

## 예제 입력 1

2<br/>
10 8 17<br/>
0 0<br/>
1 0<br/>
1 1<br/>
4 2<br/>
4 3<br/>
4 5<br/>
2 4<br/>
3 4<br/>
7 4<br/>
8 4<br/>
9 4<br/>
7 5<br/>
8 5<br/>
9 5<br/>
7 6<br/>
8 6<br/>
9 6<br/>
10 10 1<br/>
5 5

<br/>
<br/>

## 예제 출력 1

5<br/>
4
<br/>
<br/>

## 예제 입력 2

1<br/>
5 3 6<br/>
0 2<br/>
1 2<br/>
2 2<br/>
3 2<br/>
4 2<br/>
4 0

<br/>
<br/>

## 예제 출력 2

2
<br/>
<br/>

## 나의 Solution

```javascript
const { join } = require("path");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let graph = [];
answer = [];
let dx = [-1, 1, 0, 0]; //x값 방향 그래프 받기
let dy = [0, 0, -1, 1]; //y값 방향 그래프 받기
let n = [];
let m = [];
let k = [];
let arr = [];
let cnt = 0; //벌레의 개수
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  t = Number(input[0]); //테스트 케이스 개수 받기
  m.push(Number(input[1].split(" ")[0])); //첫번째 테스트 케이스의 가로(열)의 길이
  n.push(Number(input[1].split(" ")[1])); //첫번째 테스트 케이스의 세로(행)의 길이
  k.push(Number(input[1].split(" ")[2])); //첫번째 테스트 케이스의 배추의 좌표값
  let pt = 2;
  for (let i = 2; i < input.length; i++) {
    if (input[i].match(/\s/g).length === 2) {
      //공백이 2개(띄어쓰기가 3개면 테스트케이스의 시작)인 인덱스를 찾기
      graph.push(input.slice(pt, i)); //배추의 좌표값만 받아서 넣기
      m.push(Number(input[i].split(" ")[0])); //각 테스트 케이스의 가로(열)의 길이
      n.push(Number(input[i].split(" ")[1])); //각 테스트 케이스의 세로(행)의 길이
      k.push(Number(input[i].split(" ")[2])); //각 테스트 케이스의 배추의 좌표값
      pt = i + 1;
    }
    if (i === input.length - 1) {
      graph.push(input.slice(pt)); //좌표값 담기
    }
  }
  for (let i = 0; i < graph.length; i++) {
    //테스트 케이스에 갯수만큼 반복문 돌고
    arr = Array.from(Array(n[i]), () => Array(m[i]).fill(0)); //그 테스트 케이스의 행,열 만큼의 빈배열 만들ㄹ기
    for (let j of graph[i]) {
      let [x, y] = j.split(" ").map((el) => Number(el));
      arr[y][x] = 1;
    } //배열에 좌표값 담기
    solution(arr, n[i], m[i]); //그 배열에서 dfs
    cnt = 0; //하나의 테스트케이스가 끝나면 벌레의 개수 0으로 초기화
  }

  process.exit();
});

function solution(arr, n, m) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 1) {
        arr[i][j] === 0;
        cnt++; //배추 모여있는 곳의 개수
        DFS(i, j);
      }
    }
  }

  function DFS(x, y) {
    arr[x][y] = 0;

    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && arr[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  }
  console.log(cnt);
}
```

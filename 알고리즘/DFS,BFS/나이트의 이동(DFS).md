# 나이트의 이동(7562)

## 문제
체스판 위에 한 나이트가 놓여져 있다. 나이트가 한 번에 이동할 수 있는 칸은 아래 그림에 나와있다. 나이트가 이동하려고 하는 칸이 주어진다. 나이트는 몇 번 움직이면 이 칸으로 이동할 수 있을까?<br/>

![image](https://user-images.githubusercontent.com/68778883/165774606-2827d38c-1ce4-47ce-bd1a-7afdcc311466.png)

<br/>
<br/>

## 입력
입력의 첫째 줄에는 테스트 케이스의 개수가 주어진다.<br/>
각 테스트 케이스는 세 줄로 이루어져 있다.<br/> 첫째 줄에는 체스판의 한 변의 길이 l(4 ≤ l ≤ 300)이 주어진다.<br/> 체스판의 크기는 l × l이다. 체스판의 각 칸은 두 수의 쌍 {0, ..., l-1} × {0, ..., l-1}로 나타낼 수 있다. <br/>
둘째 줄과 셋째 줄에는 나이트가 현재 있는 칸, 나이트가 이동하려고 하는 칸이 주어진다.
<br/>
<br/>

## 출력
각 테스트 케이스마다 나이트가 최소 몇 번만에 이동할 수 있는지 출력한다.
<br/>
<br/>

## 예제 입력 1
3
<br/>8
<br/>0 0
<br/>7 0
<br/>100
<br/>0 0
<br/>30 50
<br/>10
<br/>1 1
<br/>1 1


<br/>

## 예제 출력 1
5
<br/>28
<br/>0


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
let dx = [1, 2, 2, 1, -1, -2, -2, -1]; //x값 방향 그래프 받기
let dy = [-2, -1, 1, 2, 2, 1, -1, -2]; //y값 방향 그래프 받기
let t = 0;

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  t = Number(input[0]); //테스트 케이스의 수를 받기
  let pt = 1;
  for (let j = 0; j < t; j++) {
    let arr = input.slice(pt, pt + 3); //테스트 케이스의 갯수만큼 3씩 자르기
    solution(Number(arr[0]), arr[1].split(" ").map(Number), arr[2].split(" ").map(Number)); //자른 값들을 넣어줌
    pt = pt + 3; //인덱스의 값을 다음 테스트 케이스 값의 시작점으로 초기화
  }

  process.exit();
});

//좌표의 크기, 시작점, 종료점 순서
function solution(N, start, end) {
  let ch = Array.from(Array(N), () => Array(N).fill(0)); //방문 체크 배열 만들기
  let queue = [];
  let result = 0;
  queue.push(start);
  while (queue.length) {
    let [x, y] = queue.shift();
    if (x === end[0] && y === end[1]) {
      result = ch[x][y]; //도착점에 오면 방문 체크 값 꺼내기
      break;
    }
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx < 0 || nx >= N || ny < 0 || ny >= N) {
        continue;
      }
      if (ch[nx][ny] === 0) {
        ch[nx][ny] = ch[x][y] + 1; //최단거리는 체크 값에서 1씩 더해주는 것이 가장 최단 거리
        queue.push([nx, ny]);
      }
    }
  }
  console.log(result);
}
```

# 섬의 개수(4963)

## 문제
정사각형으로 이루어져 있는 섬과 바다 지도가 주어진다. 섬의 개수를 세는 프로그램을 작성하시오.<br/>
![image](https://user-images.githubusercontent.com/68778883/165959896-3316d5c1-2c88-475f-a7fd-16f3bc51338d.png)

한 정사각형과 가로, 세로 또는 대각선으로 연결되어 있는 사각형은 걸어갈 수 있는 사각형이다. 

두 정사각형이 같은 섬에 있으려면, 한 정사각형에서 다른 정사각형으로 걸어서 갈 수 있는 경로가 있어야 한다. 지도는 바다로 둘러싸여 있으며, 지도 밖으로 나갈 수 없다.

<br/>
<br/>

## 입력
입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 테스트 케이스의 첫째 줄에는 지도의 너비 w와 높이 h가 주어진다. w와 h는 50보다 작거나 같은 양의 정수이다.

둘째 줄부터 h개 줄에는 지도가 주어진다. 1은 땅, 0은 바다이다.

입력의 마지막 줄에는 0이 두 개 주어진다.
<br/>
<br/>

## 출력
각 테스트 케이스에 대해서, 섬의 개수를 출력한다.
<br/>
<br/>

## 예제 입력 1
1 1
<br/>0
<br/>2 2
<br/>0 1
<br/>1 0
<br/>3 2
<br/>1 1 1
<br/>1 1 1
<br/>5 4
<br/>1 0 1 0 0
<br/>1 0 0 0 0
<br/>1 0 1 0 1
<br/>1 0 0 1 0
<br/>5 4
<br/>1 1 1 0 1
<br/>1 0 1 0 1
<br/>1 0 1 0 1
<br/>1 0 1 1 1
<br/>5 5
<br/>1 0 1 0 1
<br/>0 0 0 0 0
<br/>1 0 1 0 1
<br/>0 0 0 0 0
<br/>1 0 1 0 1
<br/>0 0


<br/>

## 예제 출력 1
0<br/>
1<br/>
1<br/>
3<br/>
1<br/>
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

let input = []; //입력 값 받기
let n = 0;
let nArr = [];  //테스트 케이스 마다의 너비값 저장
let m = 0;
let mArr = [];  //테스트 케이스 마다의 높이값 저장
let dx = [-1, -1, 0, 1, 1, 1, 0, -1]; //x축 방향
let dy = [0, 1, 1, 1, 0, -1, -1, -1]; //y축 방샹
let arr = []; //테스트 케이스 마다의 섬의 지도

answer = 0;

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let pt = 0; //포인터
  for (let i = 0; i < input.length; i++) {
    [n, m] = input[i].split(" ").map(Number);
    if (n === 0 && m === 0) { //마지막 종료를 알림
      break;
    }
    nArr.push(n); //너비 값 저장
    mArr.push(m); //높이 값 저장
    let ars = input.slice(i + 1, i + m + 1);  //지도의 위치만큼의 배열을 자름
    arr.push(ars);
    pt = i + m; //for문의 포인터를 바꿔줌
    if (pt >= input.length - 1) {
      break;
    } else {
      i = pt;
    }
  }

//테스트 케이스 만큼 돌면서 값을 출력
  for (let i = 0; i < arr.length; i++) {
    solution(nArr[i], mArr[i], returnNum(arr[i]));
    answer = 0; //한번 돌 때마다 섬의 개수를 0으로 초기화
  }
  process.exit();
});


function solution(n, m, arr) {
  //섬의 크기가 1이면 값에 따라 값 출력
  if (n === 1 && m === 1) {
    if (arr[0][0] === 0) {
      return console.log(0);
    } else {
      return console.log(1);
    }
  }
  let queue = [];
  //지도 전체를 돌면서
  for (let i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      //지도가 1(땅)일 때만 bfs 들어가기
      if (arr[i][j] === 1) {  
        arr[i][j] = 0;
        answer++;
        bfs(i, j, arr);
      }
    }
  }

  function bfs(x, y, arr) {
    queue.push([x, y]);
    while (queue.length) {
      let [x, y] = queue.shift();
      for (let k = 0; k < 8; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx < 0 || nx >= m || ny < 0 || ny >= n || arr[nx][ny] === 0) {
          continue;
        }
        arr[nx][ny] = 0;
        queue.push([nx, ny]);
      }
    }
  }
  console.log(answer);
}

//문자열로 된 지도 형식을 Number Type으로 바꿔주는 함수
function returnNum(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let array = arr[i].split(" ").map(Number);
    newArr.push(array);
  }
  return newArr;
}

```

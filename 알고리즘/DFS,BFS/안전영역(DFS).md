# 안전 영역(2468)

## 문제

재난방재청에서는 많은 비가 내리는 장마철에 대비해서 다음과 같은 일을 계획하고 있다. 먼저 어떤 지역의 높이 정보를 파악한다. 그 다음에 그 지역에 많은 비가 내렸을 때 물에 잠기지 않는 안전한 영역이 최대로 몇 개가 만들어 지는 지를 조사하려고 한다. 이때, 문제를 간단하게 하기 위하여, 장마철에 내리는 비의 양에 따라 일정한 높이 이하의 모든 지점은 물에 잠긴다고 가정한다.

어떤 지역의 높이 정보는 행과 열의 크기가 각각 N인 2차원 배열 형태로 주어지며 배열의 각 원소는 해당 지점의 높이를 표시하는 자연수이다. 예를 들어, 다음은 N=5인 지역의 높이 정보이다.<br/>

<img width="231" alt="스크린샷 2022-04-30 오후 1 27 50" src="https://user-images.githubusercontent.com/68778883/166090944-24489b4c-b34e-40b7-943f-5fb2e38e3715.png">

<br/>
이제 위와 같은 지역에 많은 비가 내려서 높이가 4 이하인 모든 지점이 물에 잠겼다고 하자. 이 경우에 물에 잠기는 지점을 회색으로 표시하면 다음과 같다. <br/>
<img width="228" alt="스크린샷 2022-04-30 오후 1 28 03" src="https://user-images.githubusercontent.com/68778883/166090945-fa3cded4-0149-4025-9a33-aa41b03309ed.png">
<br/>
물에 잠기지 않는 안전한 영역이라 함은 물에 잠기지 않는 지점들이 위, 아래, 오른쪽 혹은 왼쪽으로 인접해 있으며 그 크기가 최대인 영역을 말한다. 위의 경우에서 물에 잠기지 않는 안전한 영역은 5개가 된다(꼭짓점으로만 붙어 있는 두 지점은 인접하지 않는다고 취급한다).

또한 위와 같은 지역에서 높이가 6이하인 지점을 모두 잠기게 만드는 많은 비가 내리면 물에 잠기지 않는 안전한 영역은 아래 그림에서와 같이 네 개가 됨을 확인할 수 있다.

<img width="230" alt="스크린샷 2022-04-30 오후 1 28 13" src="https://user-images.githubusercontent.com/68778883/166090946-c0da3c37-ebb9-4b7b-9300-318835136c0a.png">
<br/>
이와 같이 장마철에 내리는 비의 양에 따라서 물에 잠기지 않는 안전한 영역의 개수는 다르게 된다. 위의 예와 같은 지역에서 내리는 비의 양에 따른 모든 경우를 다 조사해 보면 물에 잠기지 않는 안전한 영역의 개수 중에서 최대인 경우는 5임을 알 수 있다.

어떤 지역의 높이 정보가 주어졌을 때, 장마철에 물에 잠기지 않는 안전한 영역의 최대 개수를 계산하는 프로그램을 작성하시오.

<br/>
<br/>

## 입력

첫째 줄에는 어떤 지역을 나타내는 2차원 배열의 행과 열의 개수를 나타내는 수 N이 입력된다. N은 2 이상 100 이하의 정수이다. 둘째 줄부터 N개의 각 줄에는 2차원 배열의 첫 번째 행부터 N번째 행까지 순서대로 한 행씩 높이 정보가 입력된다. 각 줄에는 각 행의 첫 번째 열부터 N번째 열까지 N개의 높이 정보를 나타내는 자연수가 빈 칸을 사이에 두고 입력된다. 높이는 1이상 100 이하의 정수이다.
<br/>
<br/>

## 출력

첫째 줄에 장마철에 물에 잠기지 않는 안전한 영역의 최대 개수를 출력한다.
<br/>
<br/>

## 예제 입력 1

5<br/>
6 8 2 6 2<br/>
3 2 3 4 6<br/>
6 7 3 3 2<br/>
7 2 5 3 6<br/>
8 9 5 2 7<br/>

<br/>

## 예제 출력 1

5

<br/>
<br/>

## 예제 입력 2

7<br/>
9 9 9 9 9 9 9<br/>
9 2 1 2 1 2 9<br/>
9 1 8 7 8 1 9<br/>
9 2 7 9 7 2 9<br/>
9 1 8 7 8 1 9<br/>
9 2 1 2 1 2 9<br/>
9 9 9 9 9 9 9

<br/>

## 예제 출력 2

6

<br/>
<br/>

## 나의 Solution

```javascript
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = []; //입력 값 받는 배열
let graph = []; //지도의 좌표
let ch = []; //체크 배열
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let cnt = 0; //안전 영역의 수
let max = Number.MIN_SFAE_INTEGER; //지도 좌표에서 가장 높은 높이를 갖는 값의 변수
answer = 0;
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  n = Number(input[0]);
  //그래프에 지도 좌표를 숫자로 바꿔서 받기
  for (let i = 1; i <= n; i++) {
    graph.push(input[i].split(" ").map(Number));
  }
  //가장 높은 높이를 찾기
  max = Math.max(...graph.flat(2));

  solution(n, graph);
  process.exit();
});

function solution(n, arr) {
  //가장 높은 높이부터 돌기(가장 높은 높이보다 높은 것을 어차이 0이므로 돌 필요가 없다)
  for (let k = max; k > 0; k--) {
    //체크 배열을 돌 때마다 0으로 초기화
    ch = Array.from(Array(n), () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        //방문을 안했고 배열이 최대 높이보다 크거나 같아야 안전 영영이므로
        if (ch[i][j] === 0 && arr[i][j] >= k) {
          //안전영역의 수를 하나씩 올리고
          cnt++;
          //방문 처리 후
          ch[i][j] = 1;
          //dfs
          dfs(k, i, j);
        }
      }
    }
    //안전 영역의 값이 더 큰게 있으면 그걸로 바꾸기
    answer = Math.max(cnt, answer);
    cnt = 0;
  }

  function dfs(h, x, y) {
    ch[x][y] = 1;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      //해당 좌표값의 높이가 최대 높이보다 작으면 돌지 않음(안전 영역이 아니기 때문)
      if (nx < 0 || nx >= n || ny < 0 || ny >= n || ch[nx][ny] === 1 || arr[nx][ny] < h) {
        continue;
      } else {
        ch[nx][ny] = 1;
        dfs(h, nx, ny);
      }
    }
  }
  console.log(answer);
}
```

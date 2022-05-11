# A -> B(16953)

## 문제
정수 A를 B로 바꾸려고 한다. 가능한 연산은 다음과 같은 두 가지이다.

- 2를 곱한다.
- 1을 수의 가장 오른쪽에 추가한다. 


A를 B로 바꾸는데 필요한 연산의 최솟값을 구해보자.
<br/>
<br/>

## 입력
첫째 줄에 A, B (1 ≤ A < B ≤ 10<sup>9</sup>)가 주어진다.
<br/>
<br/>

## 출력
A를 B로 바꾸는데 필요한 연산의 최솟값에 1을 더한 값을 출력한다. 만들 수 없는 경우에는 -1을 출력한다.
<br/>
<br/>

## 예제 입력 1
2 162

<br/>
<br/>

## 예제 출력 1
5

<br/>
<br/>

## 예제 입력 2
4 42
<br/>
<br/>

## 예제 출력 2
-1

<br/>
<br/>

## 예제 입력 3
100 40021
<br/>
<br/>

## 예제 출력 3
5

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
let a,
  b = 0;

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  [a, b] = input[0].split(" ").map(Number);


  function dfs(L, m) {
    if (m === b) {
      //값을 찾으면 바로 종료
      console.log(L);
      process.exit();
    } else {
      for (let i of [m * 2, m * 10 + 1]) {
        if (i <= b) {
          //dfs 돌기
          dfs(L + 1, i);
        }
      }
    }
  }
  //수가 커서 체크 배열 만들면 메모리 초과 발생
  //체크배열 없이 실행
  dfs(1, a);
  //다 돌았는데도 없으면 -1 출력
  console.log(-1);

  process.exit();
});
```
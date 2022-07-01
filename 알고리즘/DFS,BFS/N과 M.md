# N과 M(1)(15649)

## 문제

자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

- 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열

<br/>
<br/>

## 입력

첫째 줄에 자연수 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 8)

<br/>
<br/>

## 출력

한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다. 중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다.

수열은 사전 순으로 증가하는 순서로 출력해야 한다.
<br/>
<br/>

## 예제 입력 1

3 1

<br/>
<br/>

## 예제 출력 1

1<br/>
2<br/>
3

<br/>
<br/>

## 예제 입력 2

4 2

<br/>
<br/>

## 예제 출력 2

1 2<br/>
1 3<br/>
1 4<br/>
2 1<br/>
2 3<br/>
2 4<br/>
3 1<br/>
3 2<br/>
3 4<br/>
4 1<br/>
4 2<br/>
4 3

<br/>
<br/>

## 예제 입력 2

4 4

<br/>
<br/>

## 예제 출력 2

1 2 3 4<br/>
1 2 4 3<br/>
1 3 2 4<br/>
1 3 4 2<br/>
1 4 2 3<br/>
1 4 3 2<br/>
2 1 3 4<br/>
2 1 4 3<br/>
2 3 1 4<br/>
2 3 4 1<br/>
2 4 1 3<br/>
2 4 3 1<br/>
3 1 2 4<br/>
3 1 4 2<br/>
3 2 1 4<br/>
3 2 4 1<br/>
3 4 1 2<br/>
3 4 2 1<br/>
4 1 2 3<br/>
4 1 3 2<br/>
4 2 1 3<br/>
4 2 3 1<br/>
4 3 1 2<br/>
4 3 2 1

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

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let answer = [];
  let [N, M] = input[0].split(" ").map(Number);
  let tmp = Array.from({ length: N }, () => 0);
  function dfs(L) {
    if (L === M) {
      //L이 원하는 개수가 될때마다 출력
      console.log(answer.join(" "));
    } else {
      for (let i = 0; i < N; i++) {
        if (tmp[i] === 0) {
          tmp[i] = 1;
          answer.push(i + 1);
          dfs(L + 1);
          tmp[i] = 0;
          answer.pop();
        }
      }
    }
  }
  dfs(0);
  process.exit();
});
```

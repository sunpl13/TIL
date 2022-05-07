# 트리의 부모 찾기(11725)

## 문제

루트 없는 트리가 주어진다. 이때, 트리의 루트를 1이라고 정했을 때, 각 노드의 부모를 구하는 프로그램을 작성하시오.

<br/>
<br/>

## 입력
첫째 줄에 노드의 개수 N (2 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N-1개의 줄에 트리 상에서 연결된 두 정점이 주어진다.
<br/>
<br/>

## 출력
첫째 줄부터 N-1개의 줄에 각 노드의 부모 노드 번호를 2번 노드부터 순서대로 출력한다.
<br/>
<br/>

## 예제 입력 1
7<br/>
1 6<br/>
6 3<br/>
3 5<br/>
4 1<br/>
2 4<br/>
4 7

<br/>

## 예제 출력 1
4<br/>
6<br/>
1<br/>
3<br/>
1<br/>
4

<br/>
<br/>

## 예제 입력 2
12<br/>
1 2<br/>
1 3<br/>
2 4<br/>
3 5<br/>
3 6<br/>
4 7<br/>
4 8<br/>
5 9<br/>
5 10<br/>
6 11<br/>
6 12

<br/>

## 예제 출력 2
1<br/>
1<br/>
2<br/>
3<br/>
3<br/>
4<br/>
4<br/>
5<br/>
5<br/>
6<br/>
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

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let n = Number(input[0]);
  //이차원 배열을 만들고
  let arr = Array.from(Array(n + 1), () => Array());

  //돌면서 인접리스트에 값을 넣어줌
  for (let i = 1; i < input.length; i++) {
    let [x, y] = input[i].split(" ").map(Number);

    arr[x].push(y);
    arr[y].push(x);
  }
  let queue = [];
  let answer = [];
  //방문 확인 배열 생성
  let ch = Array.from({ length: n + 1 }, () => 0);
  //1이 루트 노드이므로 1을 push
  queue.push(1);
  ch[1] = 1;
  while (queue.length) {
    let x = queue.shift();
    for (let i = 0; i < arr[x].length; i++) {
      //방문 안한게 있으면 값을 넣어줌
      //그럼 다음 for문을 돌 때 x 값이 되므로 부모가 됨
      if (ch[arr[x][i]] === 0) {
        ch[arr[x][i]] = 1;
        //부모 값 추가
        answer[arr[x][i]] = x;
        queue.push(arr[x][i]);
      }
    }
  }
  let result = "";
  answer.forEach((item) => (result += item + "\n"));

  // 시간초과
  //  answer.forEach((item) => console.log(item))
  console.log(result);
  process.exit();
});

```

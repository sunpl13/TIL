# 촌수계산(2644)

## 문제
우리 나라는 가족 혹은 친척들 사이의 관계를 촌수라는 단위로 표현하는 독특한 문화를 가지고 있다. 이러한 촌수는 다음과 같은 방식으로 계산된다. 기본적으로 부모와 자식 사이를 1촌으로 정의하고 이로부터 사람들 간의 촌수를 계산한다. 예를 들면 나와 아버지, 아버지와 할아버지는 각각 1촌으로 나와 할아버지는 2촌이 되고, 아버지 형제들과 할아버지는 1촌, 나와 아버지 형제들과는 3촌이 된다.

여러 사람들에 대한 부모 자식들 간의 관계가 주어졌을 때, 주어진 두 사람의 촌수를 계산하는 프로그램을 작성하시오.

<br/>
<br/>

## 입력
사람들은 1, 2, 3, …, n (1 ≤ n ≤ 100)의 연속된 번호로 각각 표시된다. 입력 파일의 첫째 줄에는 전체 사람의 수 n이 주어지고, 둘째 줄에는 촌수를 계산해야 하는 서로 다른 두 사람의 번호가 주어진다. 그리고 셋째 줄에는 부모 자식들 간의 관계의 개수 m이 주어진다. 넷째 줄부터는 부모 자식간의 관계를 나타내는 두 번호 x,y가 각 줄에 나온다. 이때 앞에 나오는 번호 x는 뒤에 나오는 정수 y의 부모 번호를 나타낸다.

각 사람의 부모는 최대 한 명만 주어진다.
<br/>
<br/>

## 출력
입력에서 요구한 두 사람의 촌수를 나타내는 정수를 출력한다. 어떤 경우에는 두 사람의 친척 관계가 전혀 없어 촌수를 계산할 수 없을 때가 있다. 이때에는 -1을 출력해야 한다.
<br/>
<br/>

## 예제 입력 1
9<br/>
7 3<br/>
7<br/>
1 2<br/>
1 3<br/>
2 7<br/>
2 8<br/>
2 9<br/>
4 5<br/>
4 6<br/>

<br/>
<br/>

## 예제 출력 1
3

<br/>
<br/>

## 예제 입력 2
9<br/>
8 6<br/>
7<br/>
1 2<br/>
1 3<br/>
2 7<br/>
2 8<br/>
2 9<br/>
4 5<br/>
4 6

<br/>
<br/>


## 예제 출력 2
-1

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
let tar1 = 0;
let tar2 = 0;
let answer = 0;
let ch = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let n = Number(input[0]);
  //촌수 두개를 각 변수에 담음
  [tar1, tar2] = input[1].split(" ").map(Number);
  let arr = Array.from(Array(n + 1), () => Array());
  //체크 배열 만들기
  ch = Array.from({ length: n + 1 }, () => 0);

  //가족 관계 정보 담기
  for (let i = 3; i < input.length; i++) {
    let [x, y] = input[i].split(" ").map(Number);

    arr[x].push(y);
    arr[y].push(x);
  }
  let queue = [];
  //시작할 촌수를 담고 BFS 실행
  queue.push(tar1);

  while (queue.length) {
    let a = queue.shift();
    //인접리스
    for (let i = 0; i < arr[a].length; i++) {
    //아직 방문하지 않았고, 시작노드가 아니라면 queue에 담기
      if (ch[arr[a][i]] === 0 && arr[a][i] !== tar1) {
        //담으면서 촌수 1 증가
        ch[arr[a][i]] = ch[a] + 1;
        queue.push(arr[a][i]);
      }
    }
  }

  //목적 노드가 0면 없다는 뜻이므로 -1 출력
  if (ch[tar2] === 0) {
    return console.log(-1);
  }
  console.log(ch[tar2]);
  process.exit();
});
```

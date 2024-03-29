# 점프왕 쩰리 (Large)(16174)

## 문제

‘쩰리’는 점프하는 것을 좋아하는 젤리다. 단순히 점프하는 것에 지루함을 느낀 ‘쩰리’는 새로운 점프 게임을 해보고 싶어 한다. 새로운 점프 게임의 조건은 다음과 같다.

1. ‘쩰리’는 가로와 세로의 칸 수가 같은 정사각형의 구역 내부에서만 움직일 수 있다. ‘쩰리’가 정사각형 구역의 외부로 나가는 경우엔 바닥으로 떨어져 즉시 게임에서 패배하게 된다.
2. ‘쩰리’의 출발점은 항상 정사각형의 가장 왼쪽, 가장 위의 칸이다. 다른 출발점에서는 출발하지 않는다.
3. ‘쩰리’가 이동 가능한 방향은 오른쪽과 아래 뿐이다. 위쪽과 왼쪽으로는 이동할 수 없다.
4. ‘쩰리’가 가장 오른쪽, 가장 아래 칸에 도달하는 순간, 그 즉시 ‘쩰리’의 승리로 게임은 종료된다.
5. ‘쩰리’가 한 번에 이동할 수 있는 칸의 수는, 현재 밟고 있는 칸에 쓰여 있는 수 만큼이다. 칸에 쓰여 있는 수 초과나 그 미만으로 이동할 수 없다.
6. 
새로운 게임이 맘에 든 ‘쩰리’는, 계속 게임을 진행해 마침내 최종 단계에 도달했다. 하지만, 게임을 진행하는 구역이 너무 넓어져버린 나머지, 이 게임에서 이길 수 있는지 없는지 가늠할 수 없어졌다.
‘쩰리’는 유능한 프로그래머인 당신에게 주어진 구역에서 승리할 수 있는 지 알아봐 달라고 부탁했다. ‘쩰리’를 도와 주어진 게임 구역에서 끝 점(오른쪽 맨 아래 칸)까지 도달할 수 있는지를 알아보자!

<br/>
<br/>

## 입력

입력의 첫 번째 줄에는 게임 구역의 크기 N (2 ≤ N ≤ 64)이 주어진다.

입력의 두 번째 줄부터 마지막 줄까지 게임판의 구역(맵)이 주어진다.

게임판의 승리 지점(오른쪽 맨 아래 칸)에는 -1이 쓰여있고, 나머지 칸에는 0 이상 100 이하의 정수가 쓰여있다.
<br/>
<br/>

## 출력

‘쩰리’가 끝 점에 도달할 수 있으면 “HaruHaru”(인용부호 없이), 도달할 수 없으면 “Hing” (인용부호 없이)을 한 줄에 출력합니다.
<br/>
<br/>

## 예제 입력 1

3<br/>
1 1 10<br/>
1 5 1<br/>
2 2 -1

<br/>
<br/>

## 예제 출력 1

HaruHaru

<br/>
<br/>

## 예제 입력 2

3<br/>
2 2 1<br/>
2 2 2<br/>
1 2 -1

<br/>
<br/>

## 예제 출력 2

Hing

<br/>
<br/>

## 나의 Solution

```javascript
class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  dequeue() {
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++
    return item
  }

  getLength() {
    return this.tail -this.head;
  }
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];


rl.on("line", function(line) {
  input.push(line);
}).on("close", function() {
  const q = new Queue();
  const n = Number(input[0]);
  const graph = [];
  const ch = Array.from({length:n},()=>Array(n).fill(0))
  for(let i = 1; i<input.length; i++){
    graph.push(input[i].split(" ").map(Number));
  }

  q.enqueue([0,0]);

  while(q.getLength()){
    const [x,y] = q.dequeue();
    const num = graph[x][y];
    if(num === -1) {
      console.log('HaruHaru');
      process.exit();
    }
    for(let [a,b] of [[x+num,y], [x,y+num]]) {
      if(a >= n || b>=n || ch[a][b] === 1) continue;
      ch[a][b] = 1;
      q.enqueue([a,b])
    }
  }
  console.log('Hing');
  process.exit();
});
```

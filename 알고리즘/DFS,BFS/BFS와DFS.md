# DFS와 BFS

## 문제
그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.<br/><Br/>

## 입력
첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다. 다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다. 어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 입력으로 주어지는 간선은 양방향이다.
<br/>
<br/>

## 출력
첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다. V부터 방문된 점을 순서대로 출력하면 된다.
<br/>
<br/>

## 예제 입력 1
4 5 1<br/>
1 2<br/>
1 3<br/>
1 4<br/>
2 4<br/>
3 4

<br/>
<br/>


## 예제 출력 1
1 2 4 3<br/>
1 2 3 4

<br/>
<br/>

## 예제 입력 2
5 5 3<br/>
5 4<br/>
5 2<br/>
1 2<br/>
3 4<br/>
3 1

<br/>
<br/>


## 예제 출력 2
3 1 2 5 4<br/>
3 1 4 2 5

<br/>
<br/>


## 나의 Solution

```javascript
function dfs(v) {
  dfsCh[v] = 1;
  dfsarr.push(v);
    for(let i=1; i<arr.length; i++){
      if(dfsCh[i]===0 && arr[v][i] === 1){
        dfs(i)
      }
    }
}

function bfs(v) { 
  let Queue = []; 
  //시작노드 큐에 삽입 
  Queue.push(v); 
  //시작 노드 방문처리 
  bfsarr.push(v); 
  //큐에 값이 있을동안 계속 반복 
  while (Queue.length !== 0) { 
    //큐에서 하나를 빼서 그 노드 방문처리 
    let dequeue = Queue.shift(); 
    bfsCh[dequeue] = 1; 
    for (let i = 1; i < arr.length; i++) { 
      //큐에서 뺀 노드를 반복하면서 노드와 연결된
      //다른 노드들 중 1이 있고 방문하지 않았다면 
      if (arr[dequeue][i] === 1 && bfsCh[i] === 0) { 
        //연결 노드 방문처리 후 큐와 출력을 위한 배열에 삽입 
        bfsCh[i] = 1; 
        Queue.push(i); 
        bfsarr.push(i); 
      } 
    } 
  } 
  return; 
}

const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 /*
4 5 1
1 2
1 3
1 4
2 4
3 4
*/
let input = []
let ch = []
let arr = []
let dfsarr=[];
let bfsarr=[];
rl.on("line", (line) => {
    input.push(line)
});
 
rl.on('close', () => {
  let [n,m,s] = input[0].split(" ").map(el => Number(el));
  input = input.splice(1)
  arr = Array.from(Array(n+1), ()=>Array(n+1).fill(0))
  for(let i of input){
    let[x,y] = i.split(" ").map(le=>Number(le));
    arr[x][y] = 1;
    arr[y][x] = 1;
  }
  dfsCh = Array.from({length: n+1}, ()=>0);
  bfsCh = Array.from({length: n+1}, ()=>0);
  dfs(s);
   bfs(s);
    console.log(dfsarr.join(' '));
    console.log(bfsarr.join(' '));
  
    process.exit();
})

```
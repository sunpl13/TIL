# 미로탐색(DFS)

7\*7 격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램을 작성하세요. 출발점은 격 자의 (1, 1) 좌표이고, 탈출 도착점은 (7, 7)좌표이다. 격자판의 1은 벽이고, 0은 통로이다. 격 자판의 움직임은 상하좌우로만 움직인다. 미로가 다음과 같다면 <br/>
![스크린샷 2022-04-22 오후 2 41 03](https://user-images.githubusercontent.com/68778883/164610596-fcd9cdc3-120e-4f1d-afe7-8cefbda8c5c8.png)<br/>
위의 지도에서 출발점에서 도착점까지 갈 수 있는 방법의 수는 8가지이다.

<br/>
<br/>

## 입력설명

7\*7 격자판의 정보가 주어집니다.

## 출력설명

첫 번째 줄에 경로의 가지수를 출력한다.

<br/>
<br/>

## 입력예제1

0 0 0 0 0 0 0<br/>
0 1 1 1 1 1 0<br/>
0 0 0 1 0 0 0<br/>
1 1 0 1 0 1 1<br/>
1 1 0 0 0 0 1<br/>
1 1 0 1 1 0 0<br/>
1 0 0 0 0 0 0

<br/>
<br/>

## 출력예제1

8

<br/>
<br/>

## 나의 Solution

```javascript
function solution(board) {
  let answer = 0;
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, 1, -1];

  function DFS(x, y) {
    if (x === 6 && y === 6) {
      answer++;
    } else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx >= 0 && nx < 7 && ny >= 0 && ny < 7 && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          DFS(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}
```

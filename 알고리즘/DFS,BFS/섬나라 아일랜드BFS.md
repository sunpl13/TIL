# 섬나라 아일랜드(BFS)

N\*N의 섬나라 아일랜드의 지도가 격자판의 정보로 주어집니다. 각 섬은 1로 표시되어 상하좌 우와 대각선으로 연결되어 있으며, 0은 바다입니다. 섬나라 아일랜드에 몇 개의 섬이 있는지 구하는 프로그램을 작성하세요.
<br/>
![스크린샷 2022-04-22 오후 2 56 00](https://user-images.githubusercontent.com/68778883/164612333-1b1460c0-01b7-4001-ad8b-6770820298b4.png)<br/>
만약 위와 같다면

<br/>
<br/>

## 입력설명

첫 번째 줄에 자연수 N(3<=N<=20)이 주어집니다.<br/>
두 번째 줄부터 격자판 정보가 주어진다.

## 출력설명

첫 번째 줄에 섬의 개수를 출력한다.

<br/>

## 입력예제1

7<br/>
1 1 0 0 0 1 0<br/>
0 1 1 0 1 1 0<br/>
0 1 0 0 0 0 0<br/>
0 0 0 1 0 1 1<br/>
1 1 0 1 1 0 0<br/>
1 0 0 0 1 0 0<br/>
1 0 1 0 1 0 0

<br/>

## 출력예제1

5

<br/>
<br/>

## 나의 Solution

```javascript
function solution(n, board) {
  let answer = 0;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        queue.push([i, j]);
        answer++;
        while (queue.length) {
          let x = queue.shift();
          for (let k = 0; k < 8; k++) {
            let nx = x[0] + dx[k];
            let ny = x[1] + dy[k];
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
              console.log(nx, ny);
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }

  return answer;
}
```

# 이진트리 순회(BFS)

아래 그림과 같은 이진트리를 넓이우선탐색해 보세요.<br/>
<img width="201" alt="캡처" src="https://user-images.githubusercontent.com/68778883/163702036-a0312ecb-40f9-4304-9c66-daa42e68183b.PNG">

<br/>
<br/>

## 출력설명

넓이 우선 탐색 : 1 2 3 4 5 6 7

<br/>
<br/>

## 나의 Solution

```javascript
function solution() {
  let answer = "";
  let queue = [];
  queue.push(1);
  while (queue.length) {
    let x = queue.shift();
    answer += x + " ";
    for (let nx of [x * 2, x * 2 + 1]) {
      if (nx > 7) {
        continue;
      } else {
        queue.push(nx);
      }
    }
  }
  return answer;
}
```

# A를 #으로
대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 
프로그램을 작성하세요.

<br/>
<br/>

## 입력설명
첫 번째 줄에 문자열이 입력된다.

## 출력설명
첫 번째 줄에 바뀐 단어를 출력한다.


<br/>

## 입력예제
BANANA

<br/>

## 출력예제
B#N#N#

<br/>
<br/>

## 나의 Solution
```javascript
function solution(s){ 
    //replace 함수는 왼쪽인자(문자열,정규식)을 오른쪽 문자로 변경
    return s.replace(/A/g,"#");
}
```
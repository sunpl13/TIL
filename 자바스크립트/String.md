# 1. String 생성자 함수
- 표준 빌트인 객체인 String 객체는 생성자 함수 객체이다.
- String 생성자 함수에 인수를 전달하지 않고 new 연산자와 함께 호출하면 [[StringData]] 내부 슬롯에 빈 문자열을 할당한 String 래퍼 객체를 생성

```javascript
const strObj = new String();
console.log(strObj); // String {length: 0, [[PrimitiveValue]]: ""}
```
- Sting 래퍼 객체는 각 문자를 프로퍼티 값으로 갖는 유사 배열 객체이면서 이터러블이다.
- 문자열이 아닌 값을 전달하면 인수를 문자열로 강제 변환한 후, [[StringData]] 내부 슬롯에 변환된 문자열을 할당한 String 래퍼 객체를 생성
```javascript
let strObj = new String(123);
console.log(strObj);
// String {0: "1", 1: "2", 2: "3", length: 3, [[PrimitiveValue]]: "123"}

strObj = new String(null);
console.log(strObj);
// String {0: "n", 1: "u", 2: "l", : "l", length: 4, [[PrimitiveValue]]: "null"}
```

<br/>
<br/>

# 2. length 프로퍼티
```javascript
'Hello'.length;    // -> 5
'안녕하세요!'.length; // -> 6
```
- String 래퍼 객체는 `length 프로퍼티`와 각 문자를 프로퍼티 값으로 가지므로 String 래퍼 객체는 유사 배열 객체이다.


<br/>
<br/>

# 3. String 메서드
- String 객체의 메서드는 배열과는 달리 `언제나 새로운 문자열을 반환`한다.
- 문자열은 변경 불가능한 원시 값이기 때문에 String 래퍼 객체도 읽기 전용 객체로 제공된다.

```javascript
const strObj = new String('Lee');

console.log(Object.getOwnPropertyDescriptors(strObj));
/* String 래퍼 객체는 읽기 전용 객체다. 즉, writable 프로퍼티 어트리뷰트 값이 false다.
{
  '0': { value: 'L', writable: false, enumerable: true, configurable: false },
  '1': { value: 'e', writable: false, enumerable: true, configurable: false },
  '2': { value: 'e', writable: false, enumerable: true, configurable: false },
  length: { value: 3, writable: false, enumerable: false, configurable: false }
}
*/
```

<br/>
<br/>


  - [1. String.prototype.indexOf](#1-stringprototypeindexof)
  - [2. String.prototype.search](#2-stringprototypesearch)
  - [3. String.prototype.includes](#3-stringprototypeincludes)
  - [4. String.prototype.startsWith](#4-stringprototypestartswith)
  - [5. String.prototype.endsWith](#5-stringprototypeendswith)
  - [6. String.prototype.charAt](#6-stringprototypecharat)
  - [7. String.prototype.substring](#7-stringprototypesubstring)
  - [8. String.prototype.slice](#8-stringprototypeslice)
  - [9. String.prototype.toUpperCase](#9-stringprototypetouppercase)
  - [10. String.prototype.toLowerCase](#10-stringprototypetolowercase)
  - [11. String.prototype.trim](#11-stringprototypetrim)
  - [12. String.prototype.repeat](#12-stringprototyperepeat)
  - [13. String.prototype.replace](#13-stringprototypereplace)
  - [14. String.prototype.split](#14-stringprototypesplit)

<br/>

## 1. String.prototype.indexOf
```javascript
const str = 'Hello World';

// 문자열 str에서 'l'을 검색하여 첫 번째 인덱스를 반환한다.
str.indexOf('l'); // -> 2


// 문자열 str에서 'or'을 검색하여 첫 번째 인덱스를 반환한다.
str.indexOf('or'); // -> 7

// 문자열 str에서 'x'를 검색하여 첫 번째 인덱스를 반환한다. 검색에 실패하면 -1을 반환한다.
str.indexOf('x'); // -> -1
```
- 대상 문자열에서 인수로 전달받은 문자열을 검색하여 첫 번째 인덱스를 반환
- string.indexOf(**value**, **idx**)
  - value : 검색할 문자열
  - idx : 검색을 시작할 인덱스(시작점)
- 대상 문자열에 특정 문자열이 존재하는지 확인할 때 유용

<br/>

## 2. String.prototype.search
```javascript
const str = 'Hello world';

// 문자열 str에서 정규 표현식과 매치하는 문자열을 검색하여 일치하는 문자열의 인덱스를 반환한다.
str.search(/o/); // -> 4
str.search(/x/); // -> -1
```
- 대상 문자열에서 인수로 전달받은 정규 표현식과 매치하는 문자열을 검색하여 일치하는 문자열의 `인덱스`를 반환
- 검색에 실패하면 -1을 반환

<br/>


## 3. String.prototype.includes
```javascript
const str = 'Hello world';

str.includes('Hello'); // -> true
str.includes('');      // -> true
str.includes('x');     // -> false
str.includes();        // -> false
```
- 대상 문자열에 인수로 전달받은 문자열이 포함되어 있는지 확인하여 그 결과를 `true` 또는 `false`로 반환
- string.includes(**value**, **idx**)
  - value : 검색할 문자
  - idx : 검색을 시작할 인덱스(시작점)

<br/>


## 4. String.prototype.startsWith
```javascript
const str = 'Hello world';

// 문자열 str이 'He'로 시작하는지 확인
str.startsWith('He'); // -> true
// 문자열 str이 'x'로 시작하는지 확인
str.startsWith('x'); // -> false
```
- 대상 문자열이 전달받은 문자열로 시작하는지 확인하여 그 결과를 `true` 또는 `false`로 반환
- string.startsWith(**value**, **idx**)
  - value : 대상 문자
  - idx : 검색을 시작할 인덱스(시작점)

<br/>


## 5. String.prototype.endsWith
```javascript
const str = 'Hello world';

// 문자열 str이 'ld'로 끝나는지 확인
str.endsWith('ld'); // -> true
// 문자열 str이 'x'로 끝나는지 확인
str.endsWith('x'); // -> false
```
- 대상 문자열이 인수로 전달받은 문자욜로 끝나는지 확인하여 그 결과를 `true` 또는 `false`로 반환
- string.endsWith(**value**, **idx**)
  - value : 대상 문자
  - idx : 검색할 문자열의 길이

<br/>


## 6. String.prototype.charAt
```javascript
const str = 'Hello';

for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i)); // H e l l o
}
```
- 대상 문자열에서 인수로 전달받은 인덱스에 위치한 문자를 검색하여 반환
- 인덱스가 범위를 벗어나는 숫자일 경우 빈 문자열을 반환

<br/>


## 7. String.prototype.substring
```javascript
const str = 'Hello World';

// 인덱스 1부터 인덱스 4 이전까지의 부분 문자열을 반환한다.
str.substring(1, 4); // -> ell
```
- 첫 번째 인수로 전달받은 인덱스에 위치하는 문자부터 두 번째 인수로 전달받은 인덱스에 위치하는 문자의 바로 이전 문자까지의 부분 문자열을 반환
  - 두 번째 인수를 생략할 시 끝까지 전부 반환

```javascript
const str = 'Hello World';

// 스페이스를 기준으로 앞에 있는 부분 문자열 취득
str.substring(0, str.indexOf(' ')); // -> 'Hello'

// 스페이스를 기준으로 뒤에 있는 부분 문자열 취득
str.substring(str.indexOf(' ') + 1, str.length); // -> 'World'
```
- indexOf 메서드와 활용하면 특정 문자열을 기준으로 앞뒤에 위치한 문자열을 획득 가능

<br/>


## 8. String.prototype.slice
```javascript
const str = 'hello world';

// substring과 slice 메서드는 동일하게 동작한다.
// 0번째부터 5번째 이전 문자까지 잘라내어 반환
str.substring(0, 5); // -> 'hello'
str.slice(0, 5); // -> 'hello'

// 인덱스가 2인 문자부터 마지막 문자까지 잘라내어 반환
str.substring(2); // -> 'llo world'
str.slice(2); // -> 'llo world'

// 인수 < 0 또는 NaN인 경우 0으로 취급된다.
str.substring(-5); // -> 'hello world'
// slice 메서드는 음수인 인수를 전달할 수 있다. 뒤에서 5자리를 잘라내어 반환한다.
str.slice(-5); // ⟶ 'world'
```
- substring 메서드와 동일하게 동작
- 인수로 음수를 전달하면 문자열 가장 뒤에서 부터 문자열을 잘라낸다.

<br/>


## 9. String.prototype.toUpperCase
```javascript
const str = 'Hello World!';

str.toUpperCase(); // -> 'HELLO WORLD!'
```
- 대상 문자열을 모두 대문자로 변경한 문자열을 반환

<br/>


## 10. String.prototype.toLowerCase
```javascript
const str = 'Hello World!';

str.toLowerCase(); // -> 'hello world!'
```
- 대상 문자열을 모두 소문자로 변경한 문자열을 반환

<br/>


## 11. String.prototype.trim
```javascript
const str = '   foo  ';

str.trim(); // -> 'foo'
```
- 대상 문자열 앞뒤에 공백 문자가 있을 경우 이를 제거한 문자열을 반환

<br/>


## 12. String.prototype.repeat
```javascript
const str = 'abc';

str.repeat();    // -> ''
str.repeat(0);   // -> ''
str.repeat(1);   // -> 'abc'
str.repeat(2);   // -> 'abcabc'
str.repeat(2.5); // -> 'abcabc' (2.5 → 2)
str.repeat(-1);  // -> RangeError: Invalid count value
```
- 대상 문자열을 인수로 전달받은 정수만큼 반복해 연결한 새로운 문자열을 반환
- 인수의 기본 값은 0

<br/>


## 13. String.prototype.replace
```javascript
const str = 'Hello world';

// str에서 첫 번째 인수 'world'를 검색하여 두 번째 인수 'Lee'로 치환한다.
str.replace('world', 'Lee'); // -> 'Hello Lee'
```
- 첫 번째 인수로 전달받은 문자열 또는 정규식을 검색하여 두 번째 인수로 전달한 문자열로 치환
- 검색된 문자열이 여럿 존재할 경우 첫 번째로 검색된 문자열만 치환

<br/>


## 14. String.prototype.split
```javascript
const str = 'How are you doing?';

// 공백으로 구분(단어로 구분)하여 배열로 반환한다.
str.split(' '); // -> ["How", "are", "you", "doing?"]

// \s는 여러 가지 공백 문자(스페이스, 탭 등)를 의미한다. 즉, [\t\r\n\v\f]와 같은 의미다.
str.split(/\s/); // -> ["How", "are", "you", "doing?"]

// 인수로 빈 문자열을 전달하면 각 문자를 모두 분리한다.
str.split(''); // -> ["H", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u", " ", "d", "o", "i", "n", "g", "?"]

// 인수를 생략하면 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다.
str.split(); // -> ["How are you doing?"]
```
- 첫 번째 인수로 전달한 문자열 또는 정규식을 검색하여 문자열을 구분한 후 분리된 각 문자열로 이루어진 배열을 반환
- 두 번째 인수로 배열의 길이를 지정할 수 있다.

<br/>


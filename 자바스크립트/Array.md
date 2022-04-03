# 1. 배열이란?

```
여러 개의 값을 순차적으로 나열한 자료구조
```

- 배열이 가지고 있는 값을 element(요소)라고 한다.
- 자바스크립트의 모든 값을 배열의 요소가 될 수 있다.
  - 원시값, 객체, 함수, 배열 등 자바스크립트에서 값으로 인정하는 모든 것은 배열의 요소가 될 수 있다.
- 배열의 요소는 배열에서 자신의 위치를 나타내는 0 이상의 정수인 `인덱스`를 갖는다.

<br/>

```javascript
const arr = ["apple", "banana", "orange"];

//배열 요소에 접근할 때 대괄호 표기법 사용
arrr[0]; //'apple'
arrr[1]; //'banana'
arrr[2]; //'orange'
```

- 배열은 배열의 길이를 나타내는 length 프로퍼티를 가짐
- 자바스크립트에 배열이라는 타입은 존재하지 않으며 배열은 `객체 타입`이다.

<br/>

```javascript
typeof arr; //object
```

- 배열은 배열 리터럴, Array 생성자 함수, Array.of, Array.from 메서드로 생성가능
- 배열의 프로토타입 객체는 Array.prototype이며 배열을 위한 빌트인 메서드를 제공

<br/>

## 배열의 특징

| 구분            | 객체                      | 배열          |
| --------------- | ------------------------- | ------------- |
| 구조            | 프로퍼티 키와 프로퍼티 값 | 인덱스와 요소 |
| 값의 참조       | 프로퍼티 키               | 인덱스        |
| 값의 순서       | X                         | O             |
| length 프로퍼티 | X                         | O             |

- 배열의 장점
  - 순차적으로 요소의 접근 가능
  - 마지막 부터 역순으로 요소의 접근 가능
  - 특정 위치부터 순차적으로 요소에 접근 가능
  - 이는 배열이 값의 순서와 length 프로퍼티를 갖기 때문!

<br/>
<br/>

# 2. 자바스크립트 배열은 배열이 아니다.

```
자료구조에서 말하는 배열 : 동일한 크기의 메모리 공간이 빈틈없이 연속적으로 나열된 자료구조
```

- 자바스크립트의 배열은 자료구조에서 말하는 배열과 다르다.
- 배열의 요소를 위한 각각의 메모리 공간이 동일한 크기를 갖지 않아도 된다.
- 연속적으로 이어져 있지 않을 수도 있다.
  - 이를 **희소배열**이라 한다.
- 자바스크립트의 <span style="color : #ff4d56; font-weight : bolder">배열은 일반적인 배열의 동작을 흉내낸 특수한 객체</span>

```javascript
// "16.2. 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체" 참고
console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));
/*
{
  '0': {value: 1, writable: true, enumerable: true, configurable: true}
  '1': {value: 2, writable: true, enumerable: true, configurable: true}
  '2': {value: 3, writable: true, enumerable: true, configurable: true}
  length: {value: 3, writable: true, enumerable: false, configurable: false}
}
*/
```
- 자바스크립트 배열은 <u>인덱스를 나타내는 문자열을 프로퍼티 키로 가지며</u> <u>length 프로퍼티를 갖는 특수한 객체이다.</u>
- 자바스크립트 배열의 요소는 프로퍼티 값이다.
- 어떤 타입의 값이라도 배열의 요소가 될 수 있다.(자바스크립트에서 사용할 수 있는 모든 값은 객체의 프로퍼티 값이 될 수 있기 때문)

```javascript
const arr = [
  'string',
  10,
  true,
  null,
  undefined,
  NaN,
  Infinity,
  [ ],
  { },
  function () {}
];
```
<br/>

### 자바스크립트 배열의 장단점
- 일반적인 배열은 인덱스로 요소에 빠르게 접근할 수 있다.
  - 특정 요소를 검색하거나 요소를 삽입, 삭제에 경우에는 효율적이지 않음
- 자바스크립트 배열은 해시테이블로 구현된 객체이므로 일반적인 배열보다 성능적인 면에서 느릴 수 밖에 없다.
  - 특정 요소를 검색하거나 요소를 삽입 또는 삭제하는 경우에는 일반적인 배열보다 빠른 성능 기대

<br/>

즉, 자바스크립트는 인덱스로 배열 요소에 접근하는 경우에는 일반적인 배열보다 느리지만, **특정 요소를 검색하거나 요소를 삽입, 삭제하는 경우에는 일반적인 배열보다 빠르다.** <br/>
배열 요소에 접근할 때 일반적인 배열보다 느릴 수밖에 없는 구조적인 단점을 보완하기 위해 모던 자바스크립트 엔진은 배열을 일반 객체와 구별하여 좀 더 배열처럼 동작하도록 최적화하여 구현했다.


<br/>
<br/>

# 3. length 프로퍼티와 희소 배열
- length 프로퍼티는 배열의 길이를 나타내는 0 이상의 정수를 값으로 갖는다.
- 빈 배열일 경우 0, 빈 배열이 아닐 경우 가장 큰 인덱스에 1을 더한 값과 같음
- length의 값은 0과 2<sup>32</sup> - 1(4,294,967,296 - 1) 미만의 양의 정수
- 즉, 배열은 요소를 최대 2<sup>32</sup> - 1(4,294,967,295)개 가질 수 있다.

```javascript
[].length        // -> 0
[1, 2, 3].length // -> 3
```
length 프로퍼티의 값은 배열에 요소를 추가하거나 삭제하면 자동 갱신된다.

<br/>

```javascript
const arr = [1, 2, 3];
console.log(arr.length); // 3

// 요소 추가
arr.push(4);
// 요소를 추가하면 length 프로퍼티의 값이 자동 갱신된다.
console.log(arr.length); // 4

// 요소 삭제
arr.pop();
// 요소를 삭제하면 length 프로퍼티의 값이 자동 갱신된다.
console.log(arr.length); // 3
```
- length 프로퍼티 값은 임의의 숫자 값을 명시적으로 할당할 수도 있다.
- 현재 length 프로퍼티 값보다 작은 숫자 값을 할당하면 배열의 길이가 줄어든다.
```javascript
const arr = [1, 2, 3, 4, 5];

// 현재 length 프로퍼티 값인 5보다 작은 숫자 값 3을 length 프로퍼티에 할당
arr.length = 3;

// 배열의 길이가 5에서 3으로 줄어든다.
console.log(arr); // [1, 2, 3]
```

<br/>

현재 length 프로퍼티 값보다 큰 숫자 값을 할당하면 length 프로퍼티 값은 변경 되지만 **실제로 배열의 길이가 늘어나지는 않는다.**

```javascript
const arr = [1];

// 현재 length 프로퍼티 값인 1보다 큰 숫자 값 3을 length 프로퍼티에 할당
arr.length = 3;

// length 프로퍼티 값은 변경되지만 실제로 배열의 길이가 늘어나지는 않는다.
console.log(arr.length); // 3
console.log(arr); // [1, empty × 2]
```
위 예제에서 empty * 2는 실제로 추가된 배열의 요소가 아니다. 즉, arr[1]과 arr[2]에는 값이 존재하지 않는다. <br/>
length 프로퍼티에 더 큰 값을 할당하는 경우 값은 성공적으로 변경되지만 값 없이 비어 있는 요소를 위해 메모리 공간을 확보하지 않고 빈 요소를 생성하지도 않는다.

<br/>

```javascript
console.log(Object.getOwnPropertyDescriptors(arr));
/*
{
  '0': {value: 1, writable: true, enumerable: true, configurable: true},
  length: {value: 3, writable: true, enumerable: false, configurable: false}
}
*/
```
```
희소 배열 : 배열의 요소가 연속적으로 위치하지 않고 일부가 비어있는 배열
```
배열이 비어있는 부분이 앞부분이나 중간일 수도 있다.

```javascript
// 희소 배열
const sparse = [, 2, , 4];

// 희소 배열의 length 프로퍼티 값은 요소의 개수와 일치하지 않는다.
console.log(sparse.length); // 4
console.log(sparse); // [empty, 2, empty, 4]

// 배열 sparse에는 인덱스가 0, 2인 요소가 존재하지 않는다.
console.log(Object.getOwnPropertyDescriptors(sparse));
/*
{
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '3': { value: 4, writable: true, enumerable: true, configurable: true },
  length: { value: 4, writable: true, enumerable: false, configurable: false }
}
*/
```
- 일반적인 배열의 length는 배열의 길이와 언제나 일치 하지만, 희소 배열은 length와 배열 요소의 개수가 일치하지 않는다.
- **희소 배열의 length는 희소 배열의 실제 요소 개수보다 언제나 크다.** 
- 희소 배열은 사용하지 않는 것이 좋다.
  - 배열의 기본적인 개념과 맞지 않으며, 성능에도 안좋은 영향을 주기 때문


<br/>
<br/>

# 4. 배열 생성
## 1. 배열 리터럴
- 가장 일반적이고 간편한 방법.
- 0개 이상의 요소를 쉼표로 구분하여 대괄호로 묶는 방식

<br/>

```javascript
const arr = [1, 2, 3];
console.log(arr.length); // 3
```

배열 리터럴에 요소를 생략하면 희소배열이 생성된다.
```javascript
const arr = [1, , 3]; // 희소 배열

// 희소 배열의 length는 배열의 실제 요소 개수보다 언제나 크다.
console.log(arr.length); // 3
console.log(arr);        // [1, empty, 3]
console.log(arr[1]);     // undefined, 프로퍼티 키가 '1'인 프로퍼티가 존재하지 않기 때문
```

<br/>
<br/>

## 2. Array 생성자 함수
Array 생성자 함수를 통해 배열을 생성할 수도 있다. <br/>
<span style="color:#ff4d56">※ 주의 : Array 생성자 함수는 전달된 인수의 개수에 따라 다르게 동작한다.</span>

<br/>

```javascript
const arr = new Array(10);

console.log(arr); // [empty × 10]
console.log(arr.length); // 10

//전달된 인수가 1개이고 숫자인 경우 length 프로퍼티 값이 인수인 배열을 생성
//희소 배열이 생성됨


console.log(Object.getOwnPropertyDescriptors(arr));
/*
{
  length: {value: 10, writable: true, enumerable: false, configurable: false}
}
*/
```

<br/>

```javascript
// 배열은 요소를 최대 4,294,967,295개 가질 수 있다.
new Array(4294967295);

// 전달된 인수가 0 ~ 4,294,967,295를 벗어나면 RangeError가 발생한다.
new Array(4294967296); // RangeError: Invalid array length

// 전달된 인수가 음수이면 에러가 발생한다.
new Array(-1); // RangeError: Invalid array length
```

<br/>

```javascript
new Array(); // -> []
// 전달된 인수가 없는 경우 빈 배열을 생성 = 배열 리터럴 []과 동일
```
<br/>

```javascript
// 전달된 인수가 2개 이상이면 인수를 요소로 갖는 배열을 생성한다.
new Array(1, 2, 3); // -> [1, 2, 3]

// 전달된 인수가 1개지만 숫자가 아니면 인수를 요소로 갖는 배열을 생성한다.
new Array({}); // -> [{}]
```

<br/>
<br/>

## 3. Array.of
```javascript
// 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.
Array.of(1); // -> [1]

Array.of(1, 2, 3); // -> [1, 2, 3]

Array.of('string'); // -> ['string']
```
- ES6에서 도입된 메서드
- 전달된 인수를 요소로 갖는 배열을 생성
- Array 생성자 함수와 다르게 인수가 1개이고 숫자더라도 인수를 요소로 갖는 배열을 생성


<br/>
<br/>

## 4. Array.from
```javascript
// 유사 배열 객체를 변환하여 배열을 생성한다.
Array.from({ length: 2, 0: 'a', 1: 'b' }); // -> ['a', 'b']

// 이터러블을 변환하여 배열을 생성한다. 문자열은 이터러블이다.
Array.from('Hello'); // -> ['H', 'e', 'l', 'l', 'o']
```
유사 배열 객체 또는 이터러블 객체를 인수로 전달받아 배열로 변환하여 반환

<br/>

```javascript
// 유사 배열 객체를 변환하여 배열을 생성한다.
Array.from({ length: 2, 0: 'a', 1: 'b' }); // -> ['a', 'b']

// 이터러블을 변환하여 배열을 생성한다. 문자열은 이터러블이다.
Array.from('Hello'); // -> ['H', 'e', 'l', 'l', 'o']
```
- Array.from 메서드를 사용하면 두 번째 인수로 전달한 콜백 함수를 통해 값을 만들면서 요소를 채울 수 있다.


<br/>
<br/>

# 5. 배열 요소의 참조
- 배열의 요소를 참조할 때에는 대괄호 표기법([])을 사용
- 대괄호 안에는 인덱스가 와야하면 정수로 평가되는 표현식이라면 인덱스 대신 사용할 수 있다.

```javascript
const arr = [1, 2];

// 인덱스가 0인 요소를 참조
console.log(arr[0]); // 1
// 인덱스가 1인 요소를 참조
console.log(arr[1]); // 2
```

<br/>

```javascript
const arr = [1, 2];

// 인덱스가 2인 요소를 참조. 배열 arr에는 인덱스가 2인 요소가 존재하지 않는다.
console.log(arr[2]); // undefined
```
배열은 인덱스를 나타내는 문자열을 프로퍼티 키로 갖는 `객체`기 때문에 존재하지 않는 프로퍼티 키로 객체의 프로퍼티에 접근했을 때 undefined를 반환한다.

<br/>
<br/>

# 6. 배열 요소의 추가와 갱신
```javascript
const arr = [0];

// 배열 요소의 추가
arr[1] = 1;

console.log(arr); // [0, 1]
console.log(arr.length); // 2
```
- 존재하지 않는 인덱스를 사용해 값을 할당하면 새로운 요소가 추가됨

```javascript
arr[100] = 100;

console.log(arr); // [0, 1, empty × 98, 100]
console.log(arr.length); // 101
```
length 프로퍼티 값보다 큰 인덱스로 새로운 요소를 추가하면 `희소배열`이 된다.

<br/>

```javascript
// 요소값의 갱신
arr[1] = 10;

console.log(arr); // [0, 10, empty × 98, 100]
```
이미 있는 요소에 값을 재할당하면 값이 갱신된다.

<br/>

```javascript
const arr = [];

// 배열 요소의 추가
arr[0] = 1;
arr['1'] = 2;

// 프로퍼티 추가
arr['foo'] = 3;
arr.bar = 4;
arr[1.1] = 5;
arr[-1] = 6;

console.log(arr); // [1, 2, foo: 3, bar: 4, '1.1': 5, '-1': 6]

// 프로퍼티는 length에 영향을 주지 않는다.
console.log(arr.length); // 2
```
- 인덱스는 요소의 위치를 나타내므로 반드시 0 이상의 정수를 사용해야 한다.
- 정수 이외의 값을 인덱스처럼 생성하면 요소가 아닌 프로퍼티가 생성된다.
- 이때 추가된 프로퍼티는 length 프로퍼티 값에 영향을 주지 않는다.

<br/>
<br/>

# 7. 배열 요소의 삭제

```javascript
const arr = [1, 2, 3];

// 배열 요소의 삭제
delete arr[1];
console.log(arr); // [1, empty, 3]

// length 프로퍼티에 영향을 주지 않는다. 즉, 희소 배열이 된다.
console.log(arr.length); // 3
```
배열은 객체기 때문에 배열의 특정 요소를 삭제하기 위해서 delete 연산자를 사용할 수 있다.
<br/>
하지만 delete 연산자는 객체의 프로퍼티 자체를 삭제하기 때문에 delete 연산자로 특정 요소를 삭제하면 `희소 배열`이 된다.

<br/>

```javascript
const arr = [1, 2, 3];

// Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 요소 수)
// arr[1]부터 1개의 요소를 제거
arr.splice(1, 1);
console.log(arr); // [1, 3]

// length 프로퍼티가 자동 갱신된다.
console.log(arr.length); // 2
```
희소 배열을 만들지 않으면서 특정 요소를 완전히 삭제하려면 **Array.prototype.splice 메서드를 사용하는 것이 좋다.**

<br/>
<br/>

# 8. 배열 메서드
- 원본 배열을 직접 변경하는 메서드
  - 외부 상태를 직접 변경하는 부수 효과가 있기 때문에 사용 시 주의해야 한다.
- 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드
- 초창기 배열 메서드는 원본 배열을 직접 변경하는 경우가 많다.

<br/>

- [1. 배열이란?](#1-배열이란)
  - [배열의 특징](#배열의-특징)
- [2. 자바스크립트 배열은 배열이 아니다.](#2-자바스크립트-배열은-배열이-아니다)
    - [자바스크립트 배열의 장단점](#자바스크립트-배열의-장단점)
- [3. length 프로퍼티와 희소 배열](#3-length-프로퍼티와-희소-배열)
- [4. 배열 생성](#4-배열-생성)
  - [1. 배열 리터럴](#1-배열-리터럴)
  - [2. Array 생성자 함수](#2-array-생성자-함수)
  - [3. Array.of](#3-arrayof)
  - [4. Array.from](#4-arrayfrom)
- [5. 배열 요소의 참조](#5-배열-요소의-참조)
- [6. 배열 요소의 추가와 갱신](#6-배열-요소의-추가와-갱신)
- [7. 배열 요소의 삭제](#7-배열-요소의-삭제)
- [8. 배열 메서드](#8-배열-메서드)
  - [1. Array.isArray](#1-arrayisarray)
  - [2. Array.prototype.indexOf](#2-arrayprototypeindexof)
  - [<span style="background-color : #f7ddbe">3. Array.prototype.push</span>](#3-arrayprototypepush)
  - [<span style="background-color : #f7ddbe">4. Array.prototype.pop</span>](#4-arrayprototypepop)
  - [<span style="background-color : #f7ddbe">5. Array.prototype.unshift</span>](#5-arrayprototypeunshift)
  - [<span style="background-color : #f7ddbe">6. Array.prototype.shift</span>](#6-arrayprototypeshift)
  - [7. Array.prototype.concat](#7-arrayprototypeconcat)
  - [8. Array.prototype.splice](#8-arrayprototypesplice)
  - [9. Array.prototype.slice](#9-arrayprototypeslice)
  - [10. Array.prototype.join](#10-arrayprototypejoin)
  - [11. Array.prototype.reverse](#11-arrayprototypereverse)
  - [12. Array.prototype.fill](#12-arrayprototypefill)
  - [13. Array.prototype.includes](#13-arrayprototypeincludes)
  - [14. Array.prototype.flat](#14-arrayprototypeflat)
- [9. 배열 고차 함수](#9-배열-고차-함수)
  - [1. Array.prototype.sort](#1-arrayprototypesort)
  - [2. Array.prototype.forEach](#2-arrayprototypeforeach)
  - [3. Array.prototype.map](#3-arrayprototypemap)
  - [4. Array.prototype.filter](#4-arrayprototypefilter)
  - [5. Array.prototype.reduce](#5-arrayprototypereduce)
  - [6. Array.prototype.some](#6-arrayprototypesome)
  - [7. Array.prototype.every](#7-arrayprototypeevery)
  - [8. Array.prototype.find](#8-arrayprototypefind)
  - [9. Array.prototype.findIndex](#9-arrayprototypefindindex)
  - [10. Array.prototype.flatMap](#10-arrayprototypeflatmap)

<br/>

## 1. Array.isArray
```javascript
// true
Array.isArray([]);
Array.isArray([1, 2]);
Array.isArray(new Array());

// false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(1);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray({ 0: 1, length: 1 })
```
- Array 생성자 함수의 정적 메서드
- 전달된 인수가 배열이면 true, 배열이 아니면 false를 반환

<br/>

## 2. Array.prototype.indexOf
```javascript
const arr = [1, 2, 2, 3];

// 배열 arr에서 요소 2를 검색하여 첫 번째로 검색된 요소의 인덱스를 반환한다.
arr.indexOf(2);    // -> 1
// 배열 arr에 요소 4가 없으므로 -1을 반환한다.
arr.indexOf(4);    // -> -1
// 두 번째 인수는 검색을 시작할 인덱스다. 두 번째 인수를 생략하면 처음부터 검색한다.
arr.indexOf(2, 2); // -> 2
```
- 원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환
- 원본 배열에 인수로 전달한 요소와 중복되는 요소가 여러개 있다면 첫 번째로 검색된 요소의 인덱스를 반환
- 원본 배열에 인수로 전달한 요소가 없다면 -1 반환
- 배열에 **특정 요소가 존재하는지 확인할 때 유용**


<br/>

## <span style="background-color : #f7ddbe">3. Array.prototype.push</span>
```javascript
const arr = [1, 2];

// 인수로 전달받은 모든 값을 원본 배열 arr의 마지막 요소로 추가하고 변경된 length 값을 반환한다.
let result = arr.push(3, 4);
console.log(result); // 4

// push 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [1, 2, 3, 4]
```
- 인수로 전달받은 모든 값을 원본 배열의 마지막 요소로 추가하고 **변경된 length 프로퍼티 값을 반환**
- 원본 배열을 직접 변경(<span style="color:#58ACFA;  font-weight:700">스프레드 문법을 사용하는 것이 좋다!</span>)

```javascript
const arr = [1, 2];

// arr.push(3)과 동일한 처리를 한다. 이 방법이 push 메서드보다 빠르다.
arr[arr.length] = 3;
console.log(arr); // [1, 2, 3]
```
- push 메서드는 성능 면에서 좋지 않으므로 length 프로퍼티를 사용하여 배열의 마지막에 요소를 직접 추가하는 것이 좋다.

<br/>

## <span style="background-color : #f7ddbe">4. Array.prototype.pop</span>
```javascript
const arr = [1, 2];

// 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다.
let result = arr.pop();
console.log(result); // 2

// pop 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [1]
```
- 원본 배열에서 마지막 요소를 제거하고 **제거한 요소를 반환**
- 원본 배열을 직접 변경

<br/>

## <span style="background-color : #f7ddbe">5. Array.prototype.unshift</span>
```javascript
const arr = [1, 2];

// 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 length 값을 반환한다.
let result = arr.unshift(3, 4);
console.log(result); // 4

// unshift 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [3, 4, 1, 2]
```
- 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 length 프로퍼티 값을 반환
- 원본 배열을 직접 변경(<span style="color:#58ACFA;  font-weight:700">스프레드 문법 사용</span>)

<br/>

## <span style="background-color : #f7ddbe">6. Array.prototype.shift</span>
```javascript
const arr = [1, 2];

// 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다.
let result = arr.shift();
console.log(result); // 1

// shift 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [2]
```
- 원본 배열에서 첫 번째 요소를 제거하고 **제거한 요소를 반환**
- 원본 배열을 직접 변경

<br/>


## 7. Array.prototype.concat
```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];

// 배열 arr2를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다.
// 인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가한다.
let result = arr1.concat(arr2);
console.log(result); // [1, 2, 3, 4]

// 숫자를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다.
result = arr1.concat(3);
console.log(result); // [1, 2, 3]

// 배열 arr2와 숫자를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다.
result = arr1.concat(arr2, 5);
console.log(result); // [1, 2, 3, 4, 5]

// 원본 배열은 변경되지 않는다.
console.log(arr1); // [1, 2]
```
- 인수로 전달된 값들을 원본 배열의 마지막 요소로 추가한 **새로운 배열을 반환**
- 인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가
- push와 unshift 메서드는 concat 메서드로 대체 가능
  - concat 메서드는 새로운 배열을 반환
  - concat 메서드를 사용할 경우 반드시 반환값을 변수에 할당받아야 한다!

```javascript
const arr1 = [3, 4];

// unshift 메서드는 원본 배열을 직접 변경한다.
// 따라서 원본 배열을 변수에 저장해 두지 않으면 변경된 배열을 사용할 수 없다.
arr1.unshift(1, 2);
// unshift 메서드를 사용할 경우 원본 배열을 반드시 변수에 저장해 두어야 결과를 확인할 수 있다.
console.log(arr1); // [1, 2, 3, 4]

// push 메서드는 원본 배열을 직접 변경한다.
// 따라서 원본 배열을 변수에 저장해 두지 않으면 변경된 배열을 사용할 수 없다.
arr1.push(5, 6);
// push 메서드를 사용할 경우 원본 배열을 반드시 변수에 저장해 두어야 결과를 확인할 수 있다.
console.log(arr1); // [1, 2, 3, 4, 5, 6]

// unshift와 push 메서드는 concat 메서드로 대체할 수 있다.
const arr2 = [3, 4];

// concat 메서드는 원본 배열을 변경하지 않고 새로운 배열을 반환한다.
// arr1.unshift(1, 2)를 다음과 같이 대체할 수 있다.
let result = [1, 2].concat(arr2);
console.log(result); // [1, 2, 3, 4]

// arr1.push(5, 6)를 다음과 같이 대체할 수 있다.
result = result.concat(5, 6);
console.log(result); // [1, 2, 3, 4, 5, 6]
```
concat 메서드로 push / unshift 메소드 대체가능
위 함수도 스프레드 문법으로 대체가 가능하므로 **스프레드 연산자를 일관성 있게 사용하는 것을 권장!**

<br/>

## 8. Array.prototype.splice
```javascript
const arr = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에 새로운 요소 20, 30을 삽입한다.
const result = arr.splice(1, 2, 20, 30);

// 제거한 요소가 배열로 반환된다.
console.log(result); // [2, 3]
// splice 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [1, 20, 30, 4]
```
- 원본 배열의 중간에 요소를 추가하거나 제거하는 경우에 사용하는 메서드
  - array.splice(**start**, **deleteCount[opt]**, **items[opt]**)
  - start : 원본 배열의 요소를 **제거하기 시작할 인덱스**
  - deleteCount : start부터 **제거할 요소의 개수**
  - items : 제거한 위치에 삽입할 요소들의 목록
- 원본 배열은 변경되고, 리턴 값은 제거된 요소들이다.

<br/>

## 9. Array.prototype.slice
```javascript
const arr = [1, 2, 3];

// arr[0]부터 arr[1] 이전(arr[1] 미포함)까지 복사하여 반환한다.
arr.slice(0, 1); // -> [1]

// arr[1]부터 arr[2] 이전(arr[2] 미포함)까지 복사하여 반환한다.
arr.slice(1, 2); // -> [2]

// 원본은 변경되지 않는다.
console.log(arr); // [1, 2, 3]
```
- 인수로 전달된 범위의 요소들을 복사하여 배열로 반환
- array.slice(**start**, **end**)
  - start : 복사를 시작할 인덱스
  - end : 복사를 종료할 인덱스
- 첫 번째 인수가 음수인 경우 배열의 끝에서 부터 요소를 복사한다.
  
  <br/>

## 10. Array.prototype.join
```javascript
const arr = [1, 2, 3, 4];

// 기본 구분자는 ','이다.
// 원본 배열 arr의 모든 요소를 문자열로 변환한 후, 기본 구분자 ','로 연결한 문자열을 반환한다.
arr.join(); // -> '1,2,3,4';

// 원본 배열 arr의 모든 요소를 문자열로 변환한 후, 빈문자열로 연결한 문자열을 반환한다.
arr.join(''); // -> '1234'

// 원본 배열 arr의 모든 요소를 문자열로 변환한 후, 구분자 ':'로 연결한 문자열을 반환한다.ㄴ
arr.join(':'); // -> '1:2:3:4'
```
- 원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 문자열을 구분자로 연결한 문자열을 반환
- 기본 구분자는 ,(콤마)

<br/>

## 11. Array.prototype.reverse
```javascript
const arr = [1, 2, 3];
const result = arr.reverse();

// reverse 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [3, 2, 1]
// 반환값은 변경된 배열이다.
console.log(result); // [3, 2, 1]
```
- 원본 배열의 순서를 반대로 뒤집는 메서드
- 원본 배열이 변경
- 반환 값은 변경된 배열

<br/>

## 12. Array.prototype.fill
```javascript
const arr = [1, 2, 3];

// 인수로 전달 받은 값 0을 배열의 처음부터 끝까지 요소로 채운다.
arr.fill(0);

// fill 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [0, 0, 0]
```
- 인수로 전달받은 값을 배열의 처음부터 끝까지 요소로 채운다
- array.fill(**value**, **start**, **end**)
  - value : 채울 값
  - start : 채우기 시작할 인덱스
  - end : 채우기를 **멈출 인덱스**(이 전까지만 채워지는 것에 주의!)

<br/>

## 13. Array.prototype.includes
```javascript
const arr = [1, 2, 3];

// 배열에 요소 2가 포함되어 있는지 확인한다.
arr.includes(2); // -> true

// 배열에 요소 100이 포함되어 있는지 확인한다.
arr.includes(100); // -> false
```
- 배열 내에 특정 요소가 포함되어 있는지 확인 하여 true, false로 반환
- array.includes(**value**, **start**)
  - value : 찾을 값
  - start : 찾기 시작할 인덱스

<br/>

## 14. Array.prototype.flat
```javascript
[1, [2, 3, 4, 5]].flat(); // -> [1, 2, 3, 4, 5]
```
- 인수로 전달한 깊이만큼 재귀적으로 배열을 평탄화하는 메서드

<br/>
<br/>

# 9. 배열 고차 함수
```
고차함수 : 함수를 인수로 전달받거나 함수를 반환하는 함수
```
- 고차함수의 사용 목적 : 외부 상태의 변경이나 가변 데이터를 피하고 불변성을 지향하는 함수형 프로그래밍에 기반을 둠
- 함수형 프로그래밍 : 순수함수와 보조함수의 조합을 통해 로직 내에 존재하는 **조건문과 반복문을 제거**하여 복잡성을 해결하고 **변수의 사용을 억제**하여 상태 변경을 피하려는 프로그래밍 패러다임

- [1. Array.prototype.sort](#1-arrayprototypesort)
- [2. Array.prototype.forEach](#2-arrayprototypeforeach)
- [3. Array.prototype.map](#3-arrayprototypemap)
- [4. Array.prototype.filter](#4-arrayprototypefilter)
- [5. Array.prototype.reduce](#5-arrayprototypereduce)
- [6. Array.prototype.some](#6-arrayprototypesome)
- [7. Array.prototype.every](#7-arrayprototypeevery)
- [8. Array.prototype.find](#8-arrayprototypefind)
- [9. Array.prototype.findIndex](#9-arrayprototypefindindex)
- [10. Array.prototype.flatMap](#10-arrayprototypeflatmap)

## 1. Array.prototype.sort
```javascript
const fruits = ['Banana', 'Orange', 'Apple'];

// ascending(오름차순)
fruits.sort();
console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]

// descending(내림차순)
fruits.reverse();
console.log(fruits); // [ 'Orange', 'Banana', 'Apple' ]
```
- 배열의 요소를 정렬하는 함수
  - 기본 정렬 순서는 문자열 Unicode 코드 포인트 순서를 따른
- 원본 배열을 집접 변경한다.
- array.sort(fn?)
  - 숫자의 순서를 정렬할 때에는 인자로 함수를 넣어줘야 한다.


<br/>

## 2. Array.prototype.forEach
```javascript
const numbers = [1, 2, 3];
let pows = [];

// for 문으로 순회
for (let i = 0; i < numbers.length; i++) {
  pows.push(numbers[i] ** 2);
}

console.log(pows); // [ 1, 4, 9 ]

pows = [];

// forEach 메소드로 순회
numbers.forEach(function (item) {
  pows.push(item ** 2);
});

// ES6 화살표 함수
// numbers.forEach(item => pows.push(item ** 2));

console.log(pows); // [ 1, 4, 9 ]
```
- for문 대신 사용할 수 있는 메서드
- 배열을 순회하며 주어진 메서드를 실행
- array.forEach(callBack:(**value**, **index**, **array**))
  - value : 배열을 순회하는 해당 요소 값
  - index : 순회하는 배열의 인덱스 값
  - array : forEach 메서드를 호출한 배열 자체
- 반환 값은 undefined

<br/>

## 3. Array.prototype.map
```javascript
const numbers = [1, 4, 9];

// 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행
const roots = numbers.map(function (item) {
  // 반환값이 새로운 배열의 요소가 된다. 반환값이 없으면 새로운 배열은 비어 있다.
  return Math.sqrt(item);
});

// 위 코드의 축약표현은 아래와 같다.
// const roots = numbers.map(Math.sqrt);

// map 메소드는 새로운 배열을 반환한다
console.log(roots);   // [ 1, 2, 3 ]
// map 메소드는 원본 배열은 변경하지 않는다
console.log(numbers); // [ 1, 4, 9 ]
```
- 배열을 순회하며 각 요소에 대해 인자로 주어진 콜백 함수의 반환값으로 새로운 배열을 생성하여 반환
- array.map(callBack:(**value**, **index**, **array**))
  - value : 배열을 순회하는 해당 요소 값
  - index : 순회하는 배열의 인덱스 값
  - array : map 메서드를 호출한 배열 자체
- forEach문과 차이점
  - forEach문은 배열을 순회하며 요소 값을 참조하여 무언가를 하기 위한 함수
  - map은 배열을 순회하며 요소 값을 다른 값으로 매핑하기 위한 함수

<br/>

## 4. Array.prototype.filter
```javascript
const result = [1, 2, 3, 4, 5].filter(function (item, index, self) {
  console.log(`[${index}] = ${item}`);
  return item % 2; // 홀수만을 필터링한다 (1은 true로 평가된다)
});

console.log(result); // [ 1, 3, 5 ]
```
- 배열을 순회하며 각 요소에 대해 인주로 주어진 **콜백함수의 결과가 true인 배열 요소의 값만을 추출한 새로운 배열 반환**
- array.filter(callBack:(**value**, **index**, **array**))
  - value : 배열을 순회하는 해당 요소 값
  - index : 순회하는 배열의 인덱스 값
  - array : filter 메서드를 호출한 배열 자체
- 배열에서 특정 케이스에 대한 필터링 용도로 사용

<br/>

## 5. Array.prototype.reduce
```javascript
const arr = [1, 2, 3, 4, 5];

/*
previousValue: 이전 콜백의 반환값
currentValue : 배열 요소의 값
currentIndex : 인덱스
array        : 메소드를 호출한 배열, 즉 this
*/
// 합산
const sum = arr.reduce(function (previousValue, currentValue, currentIndex, self) {
  console.log(previousValue + '+' + currentValue + '=' + (previousValue + currentValue));
  return previousValue + currentValue; // 결과는 다음 콜백의 첫번째 인자로 전달된다
});

console.log(sum); // 15: 1~5까지의 합
/*
1: 1+2=3
2: 3+3=6
3: 6+4=10
4: 10+5=15
15
*/

// 최대값 취득
const max = arr.reduce(function (pre, cur) {
  return pre > cur ? pre : cur;
});

console.log(max); // 5: 최대값
```
![image](https://user-images.githubusercontent.com/68778883/160281497-b426a9ff-674a-4afb-9684-c91a658d3b81.png)

- 배열을 순회하며 각 요소에 대하여 이전 콜백 함수의 실행 반환 값을 전달하여 콜백함수를 실행하고 그 결과를 반환
-  array.reduce(callBack:(**previous**, **currentValue**, **currentIndex**, s**elf**))
  - previous : 이전 콜백의 반환 값
  - currentValue : 현 배열 요소의 요소 값
  - currentIndex : 인덱스
  - self : 메소드를 호출한 배열, this
- reduce 함수의 두번째 인자로 초기 값을 설정해 줄 수 있다.
  - 초기 값을 설정해주면 에러를 회피할 수 있으므로 **언제나 초기 값을 전달해주는 것이 보다 안전하다**


<br/>

## 6. Array.prototype.some
```javascript
// 배열의 요소 중에 10보다 큰 요소가 1개 이상 존재하는지 확인
[5, 10, 15].some(item => item > 10); // -> true

// 배열의 요소 중에 0보다 작은 요소가 1개 이상 존재하는지 확인
[5, 10, 15].some(item => item < 0); // -> false

// 배열의 요소 중에 'banana'가 1개 이상 존재하는지 확인
['apple', 'banana', 'mango'].some(item => item === 'banana'); // -> true

// some 메서드를 호출한 배열이 빈 배열인 경우 언제나 false를 반환한다.
[].some(item => item > 3); // -> false
```
- 배열 요소 중에 콜백 함수를 통해 정의한 조건을 만족하는 요소가 1개 이상 존재하는지 확인하여 그 결과를 불리언으로 반환
- some 메서드를 호출한 배열이 빈 배열일 경우 언제나 false를 반환
- 두번째 인수로 this 객체를 전달할 수 있다.
<br/>

## 7. Array.prototype.every
```javascript
// 배열의 모든 요소가 3보다 큰지 확인
[5, 10, 15].every(item => item > 3); // -> true

// 배열의 모든 요소가 10보다 큰지 확인
[5, 10, 15].every(item => item > 10); // -> false

// every 메서드를 호출한 배열이 빈 배열인 경우 언제나 true를 반환한다.
[].every(item => item > 3); // -> true
```
- 배열 요소 중에 콜백 함수를 통해 정의한 조건을 만족하는 요소가 모두 참이면 true, 아니면 false를 반환
- some 메서드를 호출한 배열이 빈 배열일 경우 언제나 true를 반환
- 두번째 인수로 this 객체를 전달할 수 있다.

<br/>

## 8. Array.prototype.find
```javascript
const users = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' },
  { id: 2, name: 'Choi' },
  { id: 3, name: 'Park' }
];

// id가 2인 첫 번째 요소를 반환한다. find 메서드는 배열이 아니라 요소를 반환한다.
users.find(user => user.id === 2); // -> {id: 2, name: 'Kim'}
```
- 배열의 요소를 순회하면서 전달된 콜백 함수를 호출하여 반환값이 true인 첫번째 요소를 반환
- find 메서드는 함수의 반환값이 true인 첫번째 요소인 요소 값을 반환

<br/>

## 9. Array.prototype.findIndex
```javascript
const users = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' },
  { id: 2, name: 'Choi' },
  { id: 3, name: 'Park' }
];

// id가 2인 요소의 인덱스를 구한다.
users.findIndex(user => user.id === 2); // -> 1

// name이 'Park'인 요소의 인덱스를 구한다.
users.findIndex(user => user.name === 'Park'); // -> 3

// 위와 같이 프로퍼티 키와 프로퍼티 값으로 요소의 인덱스를 구하는 경우
// 다음과 같이 콜백 함수를 추상화할 수 있다.
function predicate(key, value) {
  // key와 value를 기억하는 클로저를 반환
  return item => item[key] === value;
}

// id가 2인 요소의 인덱스를 구한다.
users.findIndex(predicate('id', 2)); // -> 1

// name이 'Park'인 요소의 인덱스를 구한다.
users.findIndex(predicate('name', 'Park')); // -> 3
```
- 배열의 요소를 순회하면서 전달된 콜백 함수를 호출하여 반환값이 true인 첫번째 인덱스를 반환
- 콜백 함수의 반환 값이 true가 없다면 -1을 반환

<br/>

## 10. Array.prototype.flatMap
```javascript
const arr = ['hello', 'world'];

// map과 flat을 순차적으로 실행
arr.map(x => x.split('')).flat();
// -> ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

// flatMap은 map을 통해 생성된 새로운 배열을 평탄화한다.
arr.flatMap(x => x.split(''));
// -> ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
```
- map 메서드를 통해 생성된 새로운 배열을 평탄화하는 메서드
- 1단계만 평탄화할 수 있다.


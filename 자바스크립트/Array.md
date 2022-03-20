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

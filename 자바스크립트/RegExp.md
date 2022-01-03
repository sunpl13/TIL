# 1. 정규 표현식이란?

### **정규 표현식** : 일정한 패턴을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어

- 자바스크립트 고유문법이 아님
- 문자열을 대상으로 **패턴 매칭 기능**을 제공
  - 패턴 매칭 기능 : 특정 패턴과 일치하는 문자열을 검색하거나 추출, 치환할 수 있는 기능

<br/>
<br/>

# 2. 정규 표현식의 생성

정규 표현식의 생성 방법에는 정규표현식 리터럴과 RegExp 생성자 함수를 이용할 수 있다.

1. 정규 표현식 리터럴
   - **패턴**과 **플래그**로 구성 <br/>
     ![정규표현식 리터럴](https://user-images.githubusercontent.com/68778883/147357048-a119cf50-ac96-4dfd-ad0a-6422d939a18f.png)

<br/>

```javascript
const target = "Is this all there is?";

// 패턴: is
// 플래그: i => 대소문자를 구별하지 않고 검색한다.
const regexp = /is/i;

// test 메서드는 target 문자열에 대해 정규표현식 regexp의 패턴을 검색하여 매칭 결과를 불리언 값으로 반환한다.
regexp.test(target); // -> true
```

2. RegExp 생성자 함수 사용

```javascript
// pattern : 정규 표현식의 패턴
// flags : 정규 표현식의 플래그(g, i, m, u, y)

new RegExp(pattern[, flags])
```

```javascript
const target = "Is this all there is?";

const regexp = new RegExp(/is/i); // ES6
// const regexp = new RegExp(/is/, 'i');
// const regexp = new RegExp('is', 'i');

regexp.test(target); // -> true
```

<br/>
<br/>

# 3. RegExp 메서드

## String 객체에서 정규표현식을 사용하는 메서드

- ## String.prototype.match
- ## String.prototype.replace
- ## String.prototype.search
- ## String.prototype.split

<br/>

## RegExp 객체에서 사용하는 메서드

- ## RegExp.prototype.exec
- ## RegExp.prototype.test

<br/>

## 1. RegExp.prototype.exec

> ### 정규 표현식의 패턴을 검색하여 매칭 결과를 배열로 반환(`첫 번째 매칭 결과만 반환`)
>
> ### 매칭 결과가 없는 경우 null 반환

```javascript
const target = "Is this all there is?";
const regExp = /is/;

regExp.exec(target);
// -> ["is", index: 5, input: "Is this all there is?", groups: undefined]
```

<br/>

## 2. RegExp.prototype.test

> ### 정규 표현식의 패턴을 검색하여 매칭 결과를 불리언 값으로 반환

```javascript
const target = "Is this all there is?";
const regExp = /is/;

regExp.test(target); // -> true
```

<br/>

## 3. String.prototype.match

> ### 대상 문자열과 인수로 전달받은 정규 표현식과의 매칭결과를 `배열`로 반환

```javascript
const target = "Is this all there is?";
const regExp = /is/;

target.match(regExp); // -> ["is", index: 5, input: "Is this all there is?", groups: undefined]
```

<br/>

**exec 메서드는 문자열 내의 모든 패턴을 검색하는 g플래그를 지정해도 첫 번째 매칭 결과만 반환,**
<br/>

**하지만 match 메서드는 g 플래그 지정 시 모든 매칭 결과를 `배열`로 반환**

```javascript
const target = "Is this all there is?";
const regExp = /is/g;

target.match(regExp); // -> ["is", "is"]
```

<br/>
<br/>

# 4. 플래그

### - **플래그** : 정규 표현식의 검색 방식을 설정하기 위해 사용

| 플래그 | 의미        | 설명                                                      |
| :----: | ----------- | --------------------------------------------------------- |
|   i    | Ignore case | 대º소문자 구별 없이 패턴을 검색                           |
|   g    | Global      | 대상 문자열내에서 패턴과 일치하는 모든 문자열을 전역 검색 |
|   m    | Multi line  | 문자열의 행이 바뀌더라도 패턴 검색을 계속                 |

<br/>

### - 플래그는 총 6개, 주로 사용되는 3개가 위의 표

### - 플래그는 옵션이므로 선택적으로 사용가능

### - 하나 이상의 플래그를 동시에 설정가능

<br/>

```javascript
const target = "Is this all there is?";

// target 문자열에서 is 문자열을 대소문자를 구별하여 한 번만 검색한다.
target.match(/is/);
// -> ["is", index: 5, input: "Is this all there is?", groups: undefined]

// target 문자열에서 is 문자열을 대소문자를 구별하지 않고 한 번만 검색한다.
target.match(/is/i);
// -> ["Is", index: 0, input: "Is this all there is?", groups: undefined]

// target 문자열에서 is 문자열을 대소문자를 구별하여 전역 검색한다.
target.match(/is/g);
// -> ["is", "is"]

// target 문자열에서 is 문자열을 대소문자를 구별하지 않고 전역 검색한다.
target.match(/is/gi);
// -> ["Is", "is", "is"]
```

<br/>
<br/>

# 5. 패턴

> ### **정규 표현식** : 일정한 규칙을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어

### - 패턴 : 문자열의 일정한 규칙을 표현하기 위해 사용

### - 플래그 : 정규 표현식의 검색 방식을 설정하기 위해 사용

### - 패턴은 /로 열고 닫는다.

### - 내부 문자열의 따옴표는 생략한다.(따옴표 포함하면 패턴에 따옴표까지 포함)

### - 문자열 내에 패턴과 일치하는 문자열이 존재할 때 `정규표현식과 매치한다.`고 표현

<br/>

## 1. 문자열 검색

```javascript
const target = "Is this all there is?";

// 'is' 문자열과 매치하는 패턴. 플래그가 생략되었으므로 대소문자를 구별한다.
const regExp = /is/;
const regExp1 = /is/i; //대소문자 구별x
const regExp2 = /is/gi; //대소문자 구별하지 않고 모든 문자열 전역검색

// target과 정규 표현식이 매치하는지 테스트한다.
regExp.test(target); // -> true

// target과 정규 표현식의 매칭 결과를 구한다.
target.match(regExp);
// -> ["is", index: 5, input: "Is this all there is?", groups: undefined]

target.match(regExp1);
// -> ["Is", index: 0, input: "Is this all there is?", groups: undefined]

target.match(regExp2); // -> ["Is", "is", "is"]
```

<br/>

## 2. 임의의 문자열 검색

> ### .은 임의의 문자 한 개를 의미

<br/>

```javascript
const target = "Is this all there is?";

// 임의의 3자리 문자열을 대소문자를 구별하여 전역 검색한다.
const regExp = /.../g;

target.match(regExp); // -> ["Is ", "thi", "s a", "ll ", "the", "re ", "is?"]
```

<br/>

## 3. 반복 검색

> ### {m,n}은 앞선 패턴이 `최소 m번`, `최대 n번` 반복되는 문자열을 의미

<br/>

```javascript
const target = "A AA B BB Aa Bb AAA";

// 'A'가 최소 1번, 최대 2번 반복되는 문자열을 전역 검색한다.
const regExp = /A{1,2}/g;

target.match(regExp); // -> ["A", "AA", "A", "AA", "A"]
```

<br/>

> ### {n}은 앞선 패턴이 `n번` 반복되는 문자열을 의미

<br/>

```javascript
const target = "A AA B BB Aa Bb AAA";

// 'A'가 2번 반복되는 문자열을 전역 검색한다.
const regExp = /A{2}/g;

target.match(regExp); // -> ["AA", "AA"]
```

<br/>

> ### {n,}은 앞선 패턴이 `최소 n번 이상` 반복되는 문자열을 의미

<br/>

```javascript
const target = "A AA B BB Aa Bb AAA";

// 'A'가 최소 2번 이상 반복되는 문자열을 전역 검색한다.
const regExp = /A{2,}/g;

target.match(regExp); // -> ["AA", "AAA"]
```

<br/>

> ### +는 앞선 패턴이 `최소 한 번 이상` 반복되는 문자열을 의미(+ = {1,})

<br/>

```javascript
const target = "A AA B BB Aa Bb AAA";

// 'A'가 최소 한 번 이상 반복되는 문자열('A, 'AA', 'AAA', ...)을 전역 검색한다.
const regExp = /A+/g;

target.match(regExp); // -> ["A", "AA", "A", "AAA"]
```

<br/>

> ### ?는 앞선 패턴이 `최대 한 번 이상` 반복되는 문자열을 의미(? = {0,1})

<br/>

```javascript
const target = "color colour";

// 'colo' 다음 'u'가 최대 한 번(0번 포함) 이상 반복되고 'r'이 이어지는 문자열 'color', 'colour'를 전역 검색한다.
const regExp = /colou?r/g;

target.match(regExp); // -> ["color", "colour"]
```

<br/>

## 4. OR 검색

> ### |는 or의 의미를 갖는다.

<br/>

```javascript
const target = "A AA B BB Aa Bb";

// 'A' 또는 'B'를 전역 검색한다.
const regExp = /A|B/g;

target.match(regExp); // -> ["A", "A", "A", "B", "B", "B", "A", "B"]
```

<br/>

> ### 분해되지 않은 단어 레벨로 검색하기 위해서는 +를 함께 사용

<br/>

```javascript
const target = "A AA B BB Aa Bb";

// 'A' 또는 'B'가 한 번 이상 반복되는 문자열을 전역 검색한다.
// 'A', 'AA', 'AAA', ... 또는 'B', 'BB', 'BBB', ...
const regExp = /A+|B+/g;

target.match(regExp); // -> ["A", "AA", "B", "BB", "A", "B"]
```

<br/>

> ### 위 |를 []를 사용하여 동일하게 동작할 수 있다.

```javascript
const target = "A AA B BB Aa Bb";

// 'A' 또는 'B'가 한 번 이상 반복되는 문자열을 전역 검색한다.
// 'A', 'AA', 'AAA', ... 또는 'B', 'BB', 'BBB', ...
const regExp = /[AB]+/g;

target.match(regExp); // -> ["A", "AA", "B", "BB", "A", "B"]
```

<br/>

> ### -를 사용해서 []의 범위를 지정할 수 있다.

<br/>

```javascript
const target = "A AA BB ZZ Aa Bb";
const target1 = "AA BB Aa Bb 12";

// 'A' ~ 'Z'가 한 번 이상 반복되는 문자열을 전역 검색한다.
// 'A', 'AA', 'AAA', ... 또는 'B', 'BB', 'BBB', ... ~ 또는 'Z', 'ZZ', 'ZZZ', ...
const regExp = /[A-Z]+/g;
const regExp1 = /[A-Za-z]+/g; //대소문자를 구별하지 않고 알파벳을 검색

target.match(regExp); // -> ["A", "AA", "BB", "ZZ", "A", "B"]
target1.match(regExp1); // -> ["AA", "BB", "Aa", "Bb"]
```

<br/>

> ### 숫자 검색

<br/>

```javascript
const target = "AA BB 12,345";

// '0' ~ '9'가 한 번 이상 반복되는 문자열을 전역 검색한다.
const regExp = /[0-9]+/g;

target.match(regExp); // -> ["12", "345"]
```

<br/>

> ### \d를 사용하여 숫자를 간편히 표현할 수 있다.(\d = [0-9])
>
> ### \D는 숫자가 아닌 문자를 의미(\d와 정확히 반대)

<br/>

```javascript
const target = "AA BB 12,345";

// '0' ~ '9' 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
let regExp = /[\d,]+/g;

target.match(regExp); // -> ["12,345"]

// '0' ~ '9'가 아닌 문자(숫자가 아닌 문자) 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
regExp = /[\D,]+/g;

target.match(regExp); // -> ["AA BB ", ","]
```

<br/>

> ### \w는 알파벳, 숫자, 언더스코어를 의미(\w = [A-za-z0-9_])
>
> ### \W는 알파벳, 숫자, 언더스코어가 아닌 문자를 의미(\w와 정확히 반대)

<br/>

```javascript
const target = "Aa Bb 12,345 _$%&";

// 알파벳, 숫자, 언더스코어, ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
let regExp = /[\w,]+/g;

target.match(regExp); // -> ["Aa", "Bb", "12,345", "_"]

// 알파벳, 숫자, 언더스코어가 아닌 문자 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
regExp = /[\W,]+/g;

target.match(regExp); // -> [" ", " ", ",", " $%&"]
```

<br/>

## 5. NOT 검색

> ### []내의 ^는 not의 의미를 갖는다.

### - \D는 [^0-9]와 동일

### - \W는 [^a-za-z0-9_]와 동일

<br/>

```javascript
const target = "AA BB 12 Aa Bb";

// 숫자를 제외한 문자열을 전역 검색한다.
const regExp = /[^0-9]+/g;

target.match(regExp); // -> ["AA BB ", " Aa Bb"]
```

<br/>

## 6. 시작 위치로 검색

> ### [] 밖의 ^는 문자열의 시작을 의미

<br/>

```javascript
const target = "https://poiemaweb.com";

// 'https'로 시작하는지 검사한다.
const regExp = /^https/;

regExp.test(target); // -> true
```

<br/>

## 7. 마지막 위치로 검색

> ### $는 문자열의 마지막을 의미

<br/>

```javascript
const target = "https://poiemaweb.com";

// 'com'으로 끝나는지 검사한다.
const regExp = /com$/;

regExp.test(target); // -> true
```

<br/>
<br/>

# 6. 자주 사용하는 정규표현식

## 1. 특정 단어로 시작하는지 검사

<br/>

```javascript
const url = "https://example.com";

// 'http://' 또는 'https://'로 시작하는지 검사한다.
//^는 문자열의 시작을 의미, ?는 앞선 패턴이 최대 한번 ,
/^https?:\/\//.test(url); // -> true
```

<br/>

## 2. 특정 단어로 끝나는지 검사

<br/>

```javascript
const fileName = "index.html";

// 'html'로 끝나는지 검사한다.
/html$/.test(fileName); // -> true
```

<br/>

## 3. 숫자로만 이루어진 문자열인지 검사

<br/>

```javascript
const target = "12345";

// 숫자로만 이루어진 문자열인지 검사한다.
//^는 문자열의 시작을, $는 문자열의 마지막을 의미, \d는 숫자를 의미,+는 앞선 패턴이 최소 한번이상 반복
// 처음과 끝이 숫자이고 최소 한 번 이상 반복되는 문자열
/^\d+$/.test(target); // -> true
```

<br/>

## 4. 하나 이상의 공백으로 시작하는지 검사

<br/>

```javascript
const target = " Hi!";

// 하나 이상의 공백으로 시작하는지 검사한다.
// \s는 여러가지 공백 분자를 의미
/^[\s]+/.test(target); // -> true
```

<br/>

# 1. strict mode란?

### 자바스크립트 언어의 문법을 좀 더 엄격히 적용하여 오류를 발생시킬 가능성이 높거나 자바스크립트 엔진의 최적화 작업에 문제를 일으킬 수 있는 코드에 대해 더 엄격한 평가를 하는 ES5 부터 추가된 모드이다.

<br/>

### - ESLint 같은 린트 도구를 사용해도 strict mode와 유사한 효과를 얻을 수 있다.

- 린트 도구가 사용자 정의 형태로 커스터마이징이 가능하기 때문에 더 추천하는 방식!

<br/>
<br/>

# 2. strict mode의 적용

## strict mode를 적용하기 위해 전역의 선두 또는 함수 몸체의 선두에 `'use strict';`를 추가

### - 전역에 선두에 추가하면 스크립트 전체에 적용

### - 함수 몸체 선두에 추가하면 해당 함수와 중첩 함수에 적용

### - 코드 선두에 'use strict'를 위치하지 않으면 동작하지 않는다.

### - 즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직

- 전역으로 적용과 함수단위 마다 적용하는 것은 옳지 않다.

```javascript
"use strict";

function foo() {
  x = 10; // ReferenceError: x is not defined
}
foo();
```

```javascript
function foo() {
  x = 10; // 에러를 발생시키지 않는다.
  ("use strict");
}
foo();
```

<br/>
<br/>

# 3. strict mode가 발생시키는 에러

## 1. 암묵적 전역

선언하지 않은 변수를 참조하면 ReferenceError가 발생

```javascript
(function () {
  "use strict";

  x = 1;
  console.log(x); // ReferenceError: x is not defined
})();
```

<br/>

## 2. 변수, 함수, 매개변수의 삭제

delete 연산자로 변수, 함수, 매개변수를 삭제하면 SyntaxError가 발생

```javascript
(function () {
  'use strict';

  var x = 1;
  delete x;
  // SyntaxError: Delete of an unqualified identifier in strict mode.

  function foo(a) {
    delete a;
    // SyntaxError: Delete of an unqualified identifier in strict mode.
  }
  delete foo;
  // SyntaxError: Delete of an unqualified identifier in strict mode.
}());
```

<br/>

## 3. 매개변수 이름의 중복

중복된 매개변수 이름을 사용하면 SyntaxError가 발생

```javascript
(function () {
  "use strict";

  //SyntaxError: Duplicate parameter name not allowed in this context
  function foo(x, x) {
    return x + x;
  }
  console.log(foo(1, 2));
})();
```

<br/>

## 4. with문의 사용

with문을 사용하면 SyntaxError가 발생

```javascript
(function () {
  "use strict";

  // SyntaxError: Strict mode code may not include a with statement
  with ({ x: 1 }) {
    console.log(x);
  }
})();
```

<br/>
<br/>

# 4. strict mode 적용에 의한 변화

## 1. 일반 함수의 this

strict mode에서 함수를 일반 함수로서 호출하면 undefined가 바인딩
=> 일반 함수 내부에서는 this를 사용할 필요가 없이 때문

```javascript
(function () {
  "use strict";

  function foo() {
    console.log(this); // undefined
  }
  foo();

  function Foo() {
    console.log(this); // Foo
  }
  new Foo();
})();
```

<br/>

## 2. arguments 객체

strict mode에서는 매개변수에 전달된 인수를 재할당해서 변경해도 arguments 객체에 반영되지 않음

```javascript
(function (a) {
  "use strict";
  // 매개변수에 전달된 인수를 재할당하여 변경
  a = 2;

  // 변경된 인수가 arguments 객체에 반영되지 않는다.
  console.log(arguments); // { 0: 1, length: 1 }
})(1);
```

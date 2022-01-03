# Vue 인스턴스

### 모든 Vue vm(ViewModel)은 Vue라는 생성자 함수로 만들게 된다.

```javascript
var vm = new Vue({...})
```

> ### Vue 생성자는 미리 정의된 옵션으로 재사용 가능한 컴포넌트 생성자를 생성하도록 확장 가능

#### 즉, Vue에서 미리 정의된 속성들(data, methods, lifecycle ...)을 템플릿(요소)에 붙이는 작업을 통해 Vue에서 정의된 속성들을 가져와 사용할 수 있고, 재사용 가능한 컴포넌트 트리로 구성시킬 수 있다.

<br/>

## Vue 인스턴스에서 사용할 수 있는 속성과 API

### - el : 인스턴스가 그려지는 화면의 시작점 (특정 HTML 태그)

### - template : 화면에 표시할 요소 (HTML, CSS등)

### - data : 뷰의 반응성(Reactivity)이 반영된 데이터 속성

### - methods : 화면의 동작과 이벤트로 로직을 제어하는 메소드

<br/>

## Vue에서 제안하는 인스턴스 작성 방법

#### Vue에서는 별도의 option 객체를 생성한 후 생성자 함수에 매개변수로 대입하는 것 보다 **리터럴로 직접 대입** 시키는 것이 Vue에서 제안하는 코드 방식이다.

```javascript
//추천되지 않는 형식
var options = {
  el: "#app",
  data: {
    message: "Hello World!",
  },
  methods: {
    print() {
      console.log(this.message);
    },
  },
};

var vm = new Vue(options);
```

```javascript
//Vue에서 제안하는 형식

var vm = new Vue(
    el : '#app',
    data : {
        message : 'Hello World!'
    },
    methods: {
        print() {
            console.log(this.message)
        }
    })
```

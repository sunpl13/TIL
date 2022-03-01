# 리액트와 바닐라자바스크립트 비교

## Element 붙이기

### Vanilla Javascript
```html
<!DOCTYPE html>
<html lang="en">
  <head>
  </head>
  <body>
      
    <div id="root"></div>
    <script>
      const rootElement = document.getElementById("root");
      const element = document.createElement("h1");
      element.textContent = "Hello,World!";
      rootElement.appendChild(element);
    </script>
  </body>
</html>
```
<br/>
<br/>

### React(CDN)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
  </head>
  <body>
    <script
      crossorigin
      src="https://unpkg.com/react@17/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
    ></script>
    <div id="root"></div>
    <script>
      const rootElement = document.getElementById("root");
      const element = React.createElement("h1", { children: "Hello, World" });

      ReactDOM.render(element, rootElement);
    </script>
  </body>
</html>
```
<br/>
<br/>

### React(JSX)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
  </head>
  <body>
    <script
      crossorigin
      src="https://unpkg.com/react@17/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <div id="root"></div>
    <script type="text/babel">
      const rootElement = document.getElementById("root");
      const element = <h1 className="title">Hello, World!</h1>
      ReactDOM.render(element, rootElement);
    </script>
  </body>
</html>
```


### 정리
- Vanilla Javascript보다 React에서 DOM을 다루기가 더 쉽다.
- React는 ReactElement를 반환한다.
- JSX 문법을 사용하면 CDN 방식의 React를 사용하는 것 보다 쉽게 동작한다.
    - JSX : Javscript XML로 Javascript에 XML을 확장한 문법이다.
        -  JSX는 근본적으로 React.createElement(component, props, ...children) 함수에 대한 문법적 설탕을 제공
    - 하나의 파일에 자바스크립트와 HTML을 동시에 작성이 가능하다.
    - JSX파일 형식으로 작성하면 브라우저에서 실행되기 전에 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환된다.
    - **코드 가독성이 높아진다**
    ```javascript
    function App(){
      return (
        <h1>Hello, World!</h1>
      )
    }

    //위와 같이 작성 시 바벨은 다음과 같이 변환
    function App(){
      return React.creactElement("h1", null, "Hello, World!")
    }
######소스코드위치 : easygoing/func-class-style-coding

## 1. 수업소개

### React는 2가지 방법으로 컴포넌트를 생성
- 함수 방식(function)
- 클래스 방식(class)

### 함수 방식 컴포넌트가 예전에는 말이야...
- 지금까지 함수 스타일 컴포넌트는 컴포넌트 내부의 `state` 를 만들어 사용하는 것을 못!했!다!
- 또한, 컴포넌트 생성, 변경, 소멸에 대한 이벤트인 `life cycle API` 를 사용할 수 없!었!다!
- 그래서 함수 방식으로 만든 컴포넌트는 상위 컴포넌트가 시키는 일만 처리하는 단순한 컴포넌트에만 사용되었다.

### 최근에는(React 16.8v, February 6, 2019 부터)
- `hook` 이라는 개념이 도입
    - 덕분에 함수 방식에서도 내부적으로 `상태`를 다룰 수 있게 되었고
    - 컴포넌트의 `life cycle`에 따라서 해야할 작업을 정의할 수 있게 되었다.


* * *


## 2. 수업의 목표
- 클래스와 함수 스타일로 동일한 콤포넌트를 만들어가면서 어떤 차이점이 있는지를 비교
- 최근 도입된 hook 사용방법

### 개발환경 세팅
1. 현재 디렉토리에 리액트 애플리케이션 구현환경 구축(터미널)
```
~easygoing/func-class-style-coding npx create-react-app .
```
2. 리액트 애플리케이션 시작(터미널)
```
~easygoing/func-class-style-coding npm start
```

### 파일 세팅
1. App.js
```js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp></FuncComp>
      <ClassComp></ClassComp>
    </div>
  );
}

//함수 스타일은 return 값만 만들어주면 걔가 바로 컴포넌트의 실제 모양이 된다.
function FuncComp() {
  return (
    <div className="container">
      <h2>function style component</h2>
    </div>
  )
}

//클래스 스타일은 render()메소드를 정의해서 걔 리턴 값이 UI, 즉 실제 모양이 된다.
class ClassComp extends React.Component{
  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
      </div>
    )
  }
}

export default App;
```
- *함수 스타일은 return 값만 만들어주면 걔가 바로 컴포넌트의 실제 모양(UI)가 된다*
- *클래스 스타일은 render() 메소드를 정의하고 걔 return 값이 UI, 즉 실제 모양이 된다.*


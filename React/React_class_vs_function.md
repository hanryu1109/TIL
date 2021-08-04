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
<br>

## 2. 수업의 목표
1. 클래스와 함수 스타일로 동일한 콤포넌트를 만들어가면서 어떤 차이점이 있는지를 비교
2. 최근 도입된 hook 사용방법  

### 개발환경 세팅
1. 현재 디렉토리에 리액트 애플리케이션 구현환경 구축(터미널)
```shell
~easygoing/func-class-style-coding npx create-react-app .
```
2. 리액트 애플리케이션 시작(터미널)
```shell
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
1. **`함수 스타일은 return 값만 만들어주면 걔가 바로 컴포넌트의 실제 모양(UI)가 된다`**
2. **`클래스 스타일은 render() 메소드를 정의하고 걔 return 값이 UI, 즉 실제 모양이 된다.`**
* * *
<br>

## 3-1. 클래스에서 state 사용법

### 주요개념
1. 컴포넌트를 사용하는 쪽에서는 그 컴포넌트가 제공하는 `props`를 통해서 컴포넌트를 이용할 수 있고
2. 컴포넌트를 만드는 쪽에서는 props와 구분되는 데이터를 통해서(예를 들면 `state`) 내부의 여러가지 작업 수행

### ClassComp props, FuncComp props를 통해 전달된 데이터(initNumber)를 클래스 방식 컴포넌트와 함수 방식 컴포넌트에서는 각각 어떻게 처리할까?
- `this.props.` + `props 이름, 여기에서는 initNumber 가 된다` : this.props.initNumber
```js
function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNumber={2}></FuncComp> //props를 통해 initNumber 라는 데이터가 컴포넌트에 전달된다.
      <ClassComp initNumber={2}></ClassComp> //props를 통해 initNumber 라는 데이터가 컴포넌트에 전달된다.
    </div>
  );
}

function FuncComp(props) {
  console.log(`props: ${props}}`)
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {props.initNumber}</p> //함수 방식 컴포넌트에서는 props를 통해 전달받은 데이터를 <<props.전달된데이터이름>> 형식을 통해 사용 가능하다.
    </div>
  )
}

class ClassComp extends React.Component{
  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.props.initNumber}</p> //클래스 방식 컴포넌트에서는 props를 통해 전달받은 데이터를 <<this.props.전달된데이터이름>> 형식을 통해 사용 가능하다.
      </div>
    )
  }
}
```
1. 함수 방식 : props를 통해 (initNumber 라는) 데이터가 함수 방식으로 정의된 컴포넌트에 전달된다. ➡ props를 통해 전달받은 데이터를 <<props.전달된데이터이름>> 형식을 통해 사용 가능하다.
2. 클래스 방식 : props를 통해 (initNumber 라는) 데이터가 클래스 방식으로 정의된 컴포넌트에 전달된다. ➡ props를 통해 전달받은 데이터를 <<this.props.전달된데이터이름>> 형식을 통해 사용 가능하다.

### props에 관해 주의할 점
1. 아래 코드에서 함수의 파라미터, 즉 `props` 라고 하는 저 값의 이름은 **아무거나** 해도 상관이 없다
    - 보기 좋게 하기 위해서 보통 **props** 라는 이름을 사용한다.
```js
function FuncComp(props) {
  console.log(`props: ${props}}`)
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {props.initNumber}</p> //함수 방식 컴포넌트에서는 props를 통해 전달받은 데이터를 <<props.전달된데이터이름>> 형식을 통해 사용 가능하다.
    </div>
  )
}
```

### 컴포넌트가 내부적으로 자신의 상태를 바꾸고 관리하기 위해서 사용하는 `state`는 어떻게 처리할까?
```js
class ClassComp extends React.Component{
  state = {
    number : this.props.initNumber,
  }
  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        {/* <p>Number : {this.props.initNumber}</p>  */}
        {/* 초기값을 설정해주지 않았을 때는 props값을 그대로 정의했는데 (이렇게, this.props.initNumber) */}
        <p>Number : {this.state.number}</p>
        {/* props값을 state로 줬기 때문에 state값을 바꿀때마다 render 메소드가 호출되면서 새로 달라진 state의 값이 시각적인 요소에 반영된다. */}
        <input type="button" value="random" onClick={
            function() {
                this.setState({number: Math.random()});
            }.bind(this) //.bind(this) 이 코드는 class 방식 컴포넌트에서 이벤트를 연결하기 위해 넣어주는 것
        }></input>
        {/* this.setState에 의해서 state안에 있는 number 값이 바뀌고 바뀌면 render 메서드가 다시 호출되면서 바뀐 결과가 반영된다. */}
      </div>
    )
  }
}
```

1. 초기 상태값을 객체 형태로 설정. 이 때 전달받은 props 데이터를 사용할 수 있다.
```js
state = {
    number : this.props.initNumber,
}
```
- 초기값을 설정해주지 않았을 때는 props값을 그대로 정의했는데 (이렇게, `this.props.initNumber`)
- state 설정 이후 `this.state.number` 로 사용 가능
```js
<p>Number : {this.props.initNumber}</p> //초기값 설정 전
<p>Number : {this.state.number}</p> //초기값 설정 후
```

2. this.setState에 의해서 state 안에 있는 값이 바뀌고, 바뀌면 render() 메서드가 다시 호출되면서 바뀐 결과가 반영된다.
```js
<input type="button" value="random" onClick={
  function() {
    this.setState({number:Math.random()});
  }.bind(this) //.bind(this) 이 코드는 class 방식 컴포넌트에서 이벤트를 연결하기 위해 넣어주는 것
}></input> 
```
- 버튼 클릭시(onClick 이벤트 발생시) state값을 재설정하는 this.setState()라는 함수가 실행
- state 값이 바뀌면 render() 재실행
* * *
<br>

## 3-2. 함수에서 state 사용법 : hook
1. react가 기본적으로  공급해주는 내장된 hook이 있고
2. 사용자가 직접 hook을 만들어서 사용할 수 있다.(사용자 정의 hook)

```js
function FuncComp(props) {
  //React.useState() //이렇게 호출하면 귀찮기 때문에 React를 import할 때 { useState } 를 같이 import 를 선언하면 된다.
  var numberState = useState(props.initNumber); //state를 만들고 싶다면 useState에 어떤 값을 전달하면 그 값이 우리가 만드는 그 state의 초기값이 된다.
  var number = numberState[0]; //클래스로 state를 정의한 것과 같다.
  //console.log(numberState); //return 된 것을 확인해보니 2개의 값으로 이루어진 배열이다. 배열이 가지고 있는 첫번째 값이 우리가 원하는 state 값이 될 것이다.  
  var setNumber = numberState[1]; //이게 클래스 방식에서 setState 해주는 것과 같다. 함수가 담겨져 있는데 함수를 통해서 state 값을 변경할 수 있다.
  
  var dateState = useState(props.date);
  var date = dateState[0];
  var setDate = dateState[1];
  // console.log(dateState);

  //var [date, setDAte] = useState(props.date); //얘는 24 - 26line 과 같은 한 줄짜리 코드다임마!!
  
  return (
    <div className="container">
      <h2>function style component</h2>
      {/* <p>Number : {props.initNumber}</p> */}
      <p>Number : {number}</p>
      <input type="button" value="random" onClick={
        function() {
          setNumber(Math.random());
        } //.bind(this) 이 코드는 class 방식 컴포넌트에서 이벤트를 연결하기 위해 넣어주는 것이기 때문에 함수 방식 컴포넌트에서는 제거해준다.
      }></input>
      <p>Date : {date}</p>
      <input type="button" value="update" onClick={
        function() {
          setDate(new Date().toString());
        }
      }>
      </input>
    </div>
  )
}
```

1. 함수방식에서 state를 만들때는 React의 useState()를 호출 
```js
import React, { useState } from 'react';
```
2. useState()의 인자로 state의 초기값을 설정
```js
var dateState = useState(props.date);
var date = dateState[0];
var setDate = dateState[1];
=== var [date, setDate] = useState(props.date);
```
3. useState()는 2개의 값을 가진 배열을 리턴 : return [state 초기값, state 변경 함수]
4. useState()의 첫번째 값은 초기 state값이고, 두번째 값은 그 상태값을 바꿀 수 있는 함수 : 이 2개의 값을 통해서 state 초기값 설정하고 또 state의 값을 수정할 수 있게 되는 것!
https://ko.reactjs.org/docs/hooks-overview.html
5. 함수형 컴포넌트 방식안에서 초기 state값과 state변경 함수를 정의할 때 `var [date, setDate] = useState(new Date().toString())` 이런식으로 정의하면 깔끔!! 
6. 클래스 방식과 차이점
- 클래스 방식에서는 state를 하나의 객체 안에 넣어야 했었는데
- 함수 방식에서는 state를 만들때마다 useState 를 사용하면 된다.

### 기타
- new Date().toString() : `문자열`로 리턴, toString()을 안 붙이면 `객체`로 리턴
- [React 에서 import할 때, {}의 의미](https://codingmania.tistory.com/333)
    - useState변수는 'react'패키지에서 불러오는데 이 차이는 보내주는 export 방식의 차이다. 즉 **react 패키지에서 useState 변수를 정의하고 객체에 담아서 export 했기 때문에 중괄호를 써야 한다.**
* * *
<br/>

## 4.1 클래스에서 라이플 사이클 구현하기
![react-life-cycle-2](https://user-images.githubusercontent.com/82071500/127986891-cd1b08e4-e9c4-46cf-b791-2b9f8f0b17a2.png)

1. 마운팅 관련 함수들은, 처음 render가 호출된 이후, component가 생성(instance화) 되고, **실제 DOM으로 적용 될 때 까지를 담당**합니다. render()를 제외하고 한번씩만 호출
    1. constructor() : React component가 mount과정에서 가장 먼저 호출 됩니다. (즉 아직 DOM으로 mount되기 전에 호출)
    2. componentWillMount() : DOM 마운팅 이전에 한번 호출, constructor() 호출 이후 render()이전에 호출됩니다.
    3. render()
    4. componentDidMount() : DOM 마운팅 이후 (한번) 호출됩니다.

2. 업데이트 관련 함수들은 **props 나 state가 변화된경우, 이런경우 component가 다시 그려져야(re-rendered) 하는 경우를 담당**합니다. mount와 다르게 여러번 호출 될 수 있습니다.
    1. componentWillReceiveProps()
    2. shouldComponentUpdate() : render()를 호출할 필요가 있냐 없냐를 결정, true를 return 하면 render()호출, false를 return 하면 render()를 호출하지 않음
    3. componentWillUpdate()
    4. render()
    5. componentDidUpdate()

3. Unmounting
    1. componentWillUnmount() : component가 DOM에서 제거될때 불리게 됩니다. component제거시 한번 호출된다고 보면 됩니다.

```js
class ClassComp extends React.component{
    componentWillMount() {
        console.log('%cclass => componentWillMount', classStyle);
    }
    componentDidMount() {
        console.log('%cclass => componentDidMount', classStyle);
    }
    shouldComponentUpdate() {
        console.log('%cclass => shouldComponentUpdate', classStyle);
    }
    componentWillUpdate() {
        console.log('%cclass => componentWillUpdate', classStyle);
    }
    componentDidUpdate() {
        console.log('%cclass => componentDidUpdate', classStyle);
    }
    render() {
        console.log('%cclass => render', classStyle);
    }
}
//console 창
class => componentWillMount
class => render
class => componentDidMount
```
<br/>

## 4.2 함수에서 라이플 사이클 구현하기
### 다시 짚고 넘어가자 **HOOK**
- Hook이란 : **함수 컴포넌트**에서 **React State**와 **생명주기 기능(lifecycle features)** 을 연동(hook into)할 수 있게 해주는 함수
- 예) useState, useEffect
- Hook 사용 규칙 : 
    1) 최상위(at the top level)에서만 Hook을 호출, 반복문, 조건문, 중첩된 함수내에서 Hook을 실행 ❌
    2) React 함수 컴포넌트 안에서만 Hook을 호출

### useEffect?
1. side effects : 
    - React의 주 업무는 자기 컴포넌트를 렌더링 하는 것! 
    - 그 이외의 작업, 렌더링 과정 이외의 작업을 side effects 
    - React 컴포넌트 안에서 데이터를 가져오거나 구독하고, DOM을 직접 조작하는 작업 등등 이런 모든 작업을 side effects(effets) 라고 한다. 
2. useEffect
    - **useEffect hook은 첫번째 인자로 함수**가 들어와야 한다.
    - **useEffect hook은 두번째 인자로 배열** 이 들어올 수 있다. 주로 두번째 인자는 state. 두번째 인자가 있을 경우, useEffect 함수는 두번째 인자값의 변동이 있을 때만 실행된다.
    - 두번째 인자값이 빈배열일 경우 class component의 componentDidMount에 해당하며 컴포넌트가 생성될 때 최초로만 실행된다.
    - **처음 컴포넌트의 렌더가 끝나고 실행, 렌더가 재실행될때마다 useEffect는 다시 실행.** 
    - class 컴포넌트에서 보면 componentDidMount, componentDidUpdate 와 등가
    - 컴포넌트가 사라질 때 정리정돈해주기 위해서는 useEffect 함수의 return 값을 정의하면 된다. 이 때 리턴 값은 **함수**여야만 한다.
    - useEffect는 여러개 정의 가능
```js
var funcStyle = "color:blue";
var funcId = 0;

function FuncComp(props) {
    useEffect(function() {
        console.log(`%cfunc => useEffect (componentDidMount) ${++funcId}`, funcStyle);
    }, []) 
    
    useEffect(function() {
        console.log(`%cfunc => useEffect (componentDidMount, componentDidUpdate) ${++funcId}`, funcStyle);
    }, [number]) 
    
    useEffect(function() {
        console.log(`%cfunc => useEffect (componentDidMount, componentDidUpdate) ${++funcId}`, funcStyle);
        return(function() {
            console.log('%cfunc => useEffect return (componentwillUnMount) '+(++funcId), funcStyle);
        )
    }, [number]) 
    
    console.log(`%cfunc => render (componentDidMount, componentDidUpdate) ${++funcId}`, funcStyle);
    return (...)
}
```
<br/>

## 5. 총 정리 겸 수업을 마치며
### 목표 : App 컴포넌트에 버튼을 만들고 > 버튼을 클릭했을 때, 이 컴포넌트가 사라지게 해보자!
```js
function App() {
    var [funcShow, setFuncShow] = useState(true);
    var [classShow, setClassShow] = useState(true);
    
    return (
        <div className="container">
            <h1>Hello World</h1>
            <input type="button" value="remove func" onClick={function() { setFuncShow(false) }}></input>
            <input type="button" value="remove func" onClick={function() { setClassShow(false) }}></input>
            {funcShow ? <FuncComp></FuncComp> : null}
            {classShow ? <ClassComp></ClassComp> : null}
        </div>
    )
}
```
- 삭제하면 컴포넌트가 사라지는 것이기 때문에 useEffect의 return 값으로 들어간 함수가 return 된다.

### 앞으로 공부할 것([리액트 공식문서](https://ko.reactjs.org/docs/hooks-intro.html))
- hook 개요
- state hook 사용하기
- effect hook 사용하기
- hook 규칙
- 자신만의 hook 만들기
- 내장된 hook api 참고서

 

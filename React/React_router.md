######소스코드위치 : easygoing/react-router-dom-example

## 1. 수업소개
### 들어가기 전에
- 라우팅(routing)이란? : url 에 따라서 적당한 콘텐츠를 전송해주는 것, 적당한 페이지를 사용자들에게 보내주는 것을 의미한다.

### 무엇을 공부하나?
- 리액트를 이용해서 여러개의 페이지로 이루어져 있는 애플리케이션을 정말 쉽게 만드는데 도움을 주는 **react-router-dom** 다룬다
<br/>

## 2. 실습환경
- 폴더를 생성하고 싶은 directory 안에서 **npx create-react-app 폴더이름** 을 입력한다.
```shell
~easygoing> npx create-react-app react-router-dom-example
```

※ 웹 브라우저에서 작업하고 싶을 때
1) 개발자 도구를 연다
2) Sources 탭 > Filesystem 탭 > +Add folder to workspace 클릭 후 내가 작업하고 있는 폴더를 연다
3) 허용을 누른다
4) 작업하고 싶은 파일을 클릭해서 작업한다.
![image](https://user-images.githubusercontent.com/82071500/128144485-7dccbcb1-35cc-43c5-b8e8-5984753a6c64.png)

- App 컴포넌트 안에서 사용할 3개의 페이지, 즉 다시 말해서 컴포넌트를 만들겠다.
- 컴포넌트들의 이름은 Home, Topics, Contact
```js
//App.js
function App() {
  ...
}
```
<br/>

## 3. react router dom 설치
[react router dom 공식 문서](https://reactrouter.com/web/guides/quick-start)
```shell
~easygoing/react-router-dom-example> npm install react-router-dom
```
<br/>

## 4. Router
리액트 라우터 돔은 여러개 페이지로 이루어져 있는 애플리케이션에서 진정한 가치를 발휘!!!

### import BrowserRouter
- BrowserRouter는 react-router-dom을 적용하고 싶은 컴포넌트의 최상위 컴포넌트에 감싸주는 Wrapper Component 이다.
```js
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <BrowserRouter> <----- 이렇게 router를 적용하고 싶은 App 컴포넌트의 최상위 컴포넌트에 감싸준다!
    <App />
  </BrowserRouter>, <----- 이렇게 router를 적용하고 싶은 App 컴포넌트의 최상위 컴포넌트에 감싸준다!
  document.getElementById('root');
);

```

### import Route
- 라우팅의 본질적인 작업인 <U>url에 따른 적당한 컴포넌트가 이곳에 위치하도록!</U>
```js
//App.js
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <h1>React Router Home</h1>
      <Route><Home></Home></Route> <----- 이렇게
      <Route><Topics></Topics></Route> <----- 이렇게
      <Route><Contact></Contact></Route> <----- 이렇게
    </div>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>
  ,document.getElementById('root')
)
```

- <u>Route path 속성 지정</u> : 
  - 사용자가 이 웹사이트의 아무런 패스를 지정하지 않고 들어왔을 때(path="/")는 <Home /> component를 사용자에게 보내주고 싶다.(즉 라우팅 해주고 싶다!)
  ```js
  //App.js
  import {BrowserRouter as Router, Route} from "react-router-dom"

  function App() {
    return (
      <div>
        <h1>React Router Home</h1>
        <Route path="/"><Home></Home></Route> <----- 이렇게
        <Route path="/topics"><Topics></Topics></Route> <----- 이렇게
        <Route path="/contact"><Contact></Contact></Route> <----- 이렇게
      </div>
    )
  }

  ReactDOM.render(
    <Router>
      <App />
    </Router>
    ,document.getElementById('root')
  )
  ```

### 그런데 말입니다....
http://localhost:3000/ <br/>
=> path="/"
<br/>
http://localhost:3000/topics <br/> 
=> path="/" <br/>
=> path="/topics"
위 링크 같은 경우는 2개의 path에 걸리게 된다... 어떻게 해결?

[Route 공식문서 참조 링크](https://reactrouter.com/web/api/Route)

```js
//App.js
import { BrowserRouter as Router, Route } from "react-router-dom"
  
function App() {
  return(
    <div>
      <h1>React Router Dom Example</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/topics">Topics</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <Route exact path="/"><Home></Home></Route>
      <Route path="/topics"><Topics></Topics></Route>
      <Route path="/contact"><Contact></Contact></Route>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>
  ,document.getElementById('root')
)
```
<br/>

### Switch
- 라우트의 exact 를 쓴 것과 같은 효과를 내는 방법 : 그게 뭐냐면 switch 라는 컴포넌트 
```js
import { Switch } from "react-router-dom";

function App() {
  return (
    <div>
      ...
      <Swtich>
        <Route path="/"><Home></Home></Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
      </Switch> <----- 이렇게 감싸주면되는데... 어라? 링크를 클릭해도 바뀌지 않네??
    </div>
  )
}
```
- 리액트 라우터 돔은 패쓰와 일치하는 첫번째 컴포넌트가 발견되면 나머지 컴포넌트는 버리게 된다.
- 따라서 홈만 화면에 출력된다.
- 그렇다면 어떻게 해야할까?
- 스위치는 일치하는 것 하나만 출력하는 것이고 , 스위치가 없으면 일치하는 것들은 모두 출력


18분 57초..





- strictmode는 주의

Strict 모드는 개발 모드에서만 활성화되기 때문에, 프로덕션 빌드에는 영향을 끼치지 않습니다.

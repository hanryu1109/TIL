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
- \<Switch\> 컴포넌트는 location과 일치하는 \<Route\> 첫 번째 자식을 렌더한다.
- 따라서 위 코드 경우 path가 /topics 이더라도 \<Home\>의 \<Route\> 컴포넌트의 path="/"에 걸려 \<Home\>만 화면에 출력된다.
- 그렇다면 어떻게 해야할까?

```js
import { Switch } from "react-router-dom";

function App() {
  return (
    <div>
      ...
      <Swtich>
        <Route exact path="/"><Home></Home></Route> <----- Route path 속성 앞에 exact 를 추가해준다.
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
      </Switch>
    </div>
  )
}
```
- \<Switch\> is unique in that it renders a route exclusively. In contrast, every \<Route\> that matches the location renders inclusively

### Link
- SPA에서 중요한 것은 
  1) page가 reload가 되지 않고 
  2-1) 실제 동적으로 가져오는 데이터는 코딩으로 만들거나 
  2-2) 아니면 ajax같은 것을 통해서 비동기적으로 데이터를 가져와서 코딩으로 동적으로 페이지를 만들어주는 것
- 위 코드는 링크를 바꿀 때마다 페이지가 Reload 된다
- **그러나 Reload되지 않고 실제 url에 해당하는 페이지를 가져와주는 것을 ***Link가 해준다***
```js
import { Link } from "react-router-dom"

function App() {
  return (
    <div>
      <h1>React Router Dom Example</h1>
      <ul>
        <li><Link to="/">Home</Link></li> <------ 이렇게 사용
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
        <Route path="/">Not Found</Route>
      </Switch>
    </div>
  )
}
```

### HashRouter
```js
import { HashRouter } from "react-router-dom"

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
)
```
- #이 붙어 있으면 북마크 따라서 웹서버는 #뒤의 주소를 무시한다. 


### NavLink
- \<Link\>보다 기능이 좀 더 추가된 것
```js
import { NavLink } from "react-router-dom"

function App() {
  return(
    <div>
      <h1>React Router Dom Example</h1>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/">Home</Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
        <Route path="/">Not Found</Route>
      </Switch>
    </div>
  )
}

```
- NavLink는 Dom의 a태그에 "aria-current='page' class='active'" 속성 추가

### Nested Routing
- 라우터 안에 라우터가 중첩되서 동작하는 사례
```js
function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <p>Topics...</p>
      <ul>
        <li><NavLink to="/topics/1">HTML</NavLink></li>
        <li><NavLink to="/topics/2">JS</NavLink></li>
        <li><NavLink to="/topics/3">REACT</NavLink></li>
      </ul>
      <Switch>
        <Route path="/topics/1">HTML is...</Route>
        <Route path="/topics/2">JS is...</Route>
        <Route path="/topics/3">REACT is...</Route>
      </Switch>
    </div>
  )
}
```

### Parameter
자동으로 Topics 리스트가 만들어지고 또 그에 따라서 자동으로 라우터가 만들어지도록 해보자!

```js
import { useParams } from "react-router-dom";
```
- useParamas Hook 을 사용하기 위해서 import 해준다.

```js
import { useParams } from "react-router-dom";

var contents = [
  {id: 1, title: 'HTML', description: 'HTML is....'},
  {id: 2, title: 'JS', description: 'JS is....'},
  {id: 3, title: 'REACT', description: 'REACT is....'},
]
```
- \<NavLink\> 정보(객체)가 담긴 배열을 임의로 만든다.

```js
function Topics() {

  var lis = [];
  for (var i = 0; i < contents.length; i++) {
    lis.push(<li><NavLink to={'/topics' + contents[i].id}>{contents[i].title}</NavLink></li>)
  } <---- 이 과정을 통해 contents에 각 객체들의 정보를 활용해 렌더할 요소들을 만든다.
  
  return (
    <div>
      <h2>Topics</h2>
      <p>Topics...</p>
      <ul>
        { lis } <---- 렌더할 요소들이 만들어진 배열을 부른다. 
      </ul>
      <Route path="/topics:topic_id"><Topic></Topic></Route>
    </div>
  )
}
```
- contents 에 담긴 객체의 정보들을 읽어와 빈배열에 넣고 렌더하는 과정에서 배열을 부른다. 

```js 
import { useParams } from "react-router-dom"

function Topic() {
  var param = useParam(); <----- useParams()훅을 사용한다.
  
  console.log(param) //{topic_id: 해당되는 topic_id 숫자}
  
  return(
    ...
  )
}

function Topics() {

  var lis = [];
  for (var i = 0; i < contents.length; i++) {
    lis.push(<li><NavLink to={'/topics' + contents[i].id}>{contents[i].title}</NavLink></li>)
  } 
  return (
    <div>
      <h2>Topics</h2>
      <p>Topics...</p>
      <ul>
        { lis }
      </ul>
      <Route path="/topics:topic_id"><Topic></Topic></Route> <---- Route의 topic_id를 파라미터로 <Topic> 컴포넌트에 전달해야 한다.
    </div>
  )
}
```
- Route의 topic_id를 파라미터로 <Topic> 컴포넌트에 전달해야 한다.
- 이 때 **useParams** 라는 훅을 사용한다.

⛔ 잠깐만! **useParams()**가 뭐죠?
  - url parameter 를 key/value 객체로 반환한다.
  - 하나의 Route, 파라미터를 받기위한 저 기호 ** : ** 를 갖다 놓으면 저 자리에 들어오는 값들이 하위 컴포넌트에 parameter로 들어간다. 
  - 이 값을 받기 위해서 useParams() 를 사용

전체 코드
```js

```

## 에러
1. React 에서 list, array 내의 각 child에는 고유한 "key" prop이 있어야 한다.  
```js
function Topics() {
  var lis = [];
  for (var i=0; i < contents.length; i++) {
    lis.push(<li key={contents[i].id}><NavLink to={"/topics/" + contents[i].id}></NavLink></li>) <----- 이렇게 키를 넣어줘야 한다.
  }
  return(
    <div>
      <h3>Topics</h3>
      <ul>
        { lis }
      </ul>
    <Route path="/topics:topic_id"><Topic></Topic></Route>
    </div>
  )
}  
```

## 앞으로 React Router에서 더 공부하면 좋을 내용
- **server rendering** 을 이용하게 되면, 검색엔진에 잘 노출되는 방법에 대해서 배울 수 있다.
- **code spliting** 애플리케이션의 용량이 커지면 그 용량을 페이지를 컴퍼넌트를 적당히 쪼개서 필요할 때마다 로드 할 수 있다.
- API 제목 정도는 쭉 읽어보자.

## 잘 몰랐떤 개념
- 인터페이스 : 인터페이스란 다양한 클래스의 공통 기능을 미리 정리해놓은 기능 설계도라고 볼 수 있다.
- ![image](https://user-images.githubusercontent.com/82071500/128457370-867df773-dfd1-4261-bd68-eed547df0c1c.png)

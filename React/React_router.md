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

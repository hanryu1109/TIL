######소스코드위치 : easygoing/redux-tutorial-example

## 1. 수업소개
### Redux Definition
**A predictable state container for JavaScript apps.**

- `Redux`는 application의 복잡성을 획기적으로 낮춰서 
- 우리의 코드가 어떤 결과를 가져올지 **예측가능**하게 만들어주는 환상적인 도구
그러면 어떻게 리덕스는 어떻게 이런 목적을 달성하는가?

### Redux 특징
1. `단 하나의 진실의 원천(Single Source of Truth)` : **하나의 상태를 낳는다**라는 것이 리덕스의 특징
- 상태는 객체 {}, state = {}
  - 하나의 객체 안에서 애플리케이션에 필요한 모든 데이터를 우겨 넣는다.
- 한 곳에 데이터를 중앙 집중적으로 관리하며 아무래도 여러 곳에 흩어져 있는 것보다 훨씬 더 데이터를 관리하기가 쉬워진다.

=> <u>단 하나의 state를 유지하는 걸 통해서 애플리케이션의 복잠성을 낮춘다 라는 것이 첫번째 컨셉</u>

2. `인가된 담당자(함수)`만 데이터를 읽고 수정할 수 있다.
- 상태는 너무나 중요하기 때문에 외부로부터 철저히 차단시킨다.
- 그렇다면 어떻게 데이터를 읽고 쓰냐? 
  - 인가된 담당자만(여기서 담당자란 함수를 의미한다)을 통해서 데이터를 수정할 수 있다.
  - dispatcher, reducer 를 통해서만 데이터 수정 가능

### 자!! 다시 한 번 기억합시다!
1.
우리가 `리덕스한테 지금 글을 쓰고 싶어` 또는 `리덕스한테 어떤 글을 선택하고 싶어` 라고 얘기할 때
리덕스가 그에 따라서 꼼꼼하게 기록해서 최종적인 결과인 스테이트를 변경시켜주는 역할을 한다.
우리가 직접 state 값을 바꾸지 못한다.
=> <u>Redux가 state 값을 변경, 수정한다.</u>

2. 
데이터를 가져갈때도 아주 삼엄하게 데이터를 관리해서 **getState()** 라고 하는 것을 통해서만 데이터를 가져갈 수 있다.
`데이터를 외부에서 직접적으로 제어할 수 없음`
의도하지 않게 얘기치 않게 스테이트 값이 바뀌는 문제를 사전에 차단한다.
=> <u>우리 애플리케이션을 보다 예측가능하게 만든다.</u>

3. 
스테이트값이 바뀔때마다 스테이트 값을 사용하는 여러 부품들에게 전화를 걸어서
'야 데이터 바뀌었어 각자 자기가 해야할 일을 하도록 해' 지령을 내리는데
그러면 **각각의 애플리케이션들은 서로가 서로한테 신경쓸 필요 없이 자기 할 일만 하면 된다.**
자연스럽게 그 부품들을 섭외하거나 그 부품들을 만드는 개발자인 우리들도 그 부품에 대한 작업을 할때
딱 그 부품에 대해서만 신경쓰면 되기 때문에 애플리케이션을 만드는 과정에서 훨씬 더 적은 정신적 에너지를 소비하게 될 것이다.

4.
undo, redo 를 쉽게 할 수 있다. (UNDO: 방금 전에 했던 일을 취소(실행 취소, 작업 취소) / REDO: 취소를 취소한다)
왜냐하면 각각의 스테이트 값들을 생성할 때 철저하게 통제하고 
데이터를 만들 때 원본을 바꾸는 것이 아니라 원본을 복제하고 복제한 데이터를 수정해서 그것을 새로운 원본으로 만드는 이런 방법을 채택하고 있기 때문에
각각의 상태의 변화가 서로에게 영향을 주지 않는 독립된 형태를 유지할 수 있고
이런 특징을 잘 이용하면 undo, redo 애플리케이션의 상태를 바꾸는 것을 매우 쉽게 처리할 수있다.

5.
그리고 더 나아가서 개발을 할때 debugger를통해서 애플리케이션의 현재 상태를 볼 수 있는데 
그런데 리덕스를 이용하게 되면 현재상태뿐만 아니라 이전의 상태까지도 꼼꼼하게 레코딩하는 것을 통해서
여러분이 과거의 어느 시점으로 돌아가서 그 시점에서 애플리케이션의 상태가 무엇인가를 찾아내는 걸 통해서 문제 해결을 훨씬 쉽게하도록 도와줌

6. 
모듈 리로딩을 할 수 있다.
우리가 코드를 작성하면 자동으로 우리가 작성한 코드가 애플리케이션에 반영됨
`핫 모듈 리로딩` 이라는 것을 이용하면 애플리케이션의 새로 리프레쉬가 되는데 데이터는 그대로 남아있기 때문에
우리가 다시 입력작업을 할 필요가 없도록 우리의 개발 환경을 세팅할 수 있다.

리덕스를 이용해서 애플리케이션의 상태를 이전보다 훨씬 예측 가능하도록 개선
<br>


![image](https://user-images.githubusercontent.com/82071500/128840607-45977e07-30c9-407b-9f0d-c139dff8941f.png)

## 2. 리덕스의 여행의 지도 

### 2.1 리덕스의 여행의 지도:소개
최종적인 목적지 : 순수한 리덕스만 이용해서 읽기, 생성, 삭제 가 되는 리액트 애플리케이션 만들기

### 2.2 state와 render의 관계
- `store(like 은행)`: 정보가 저장되는 곳
  - 예를 들면 애플리케이션의 글목록, 현재 선택한 글의 정보 등등같은 것이 저장되는 곳

- `state` : store안에는 **state**라는 실제 정보가 저장 됨
  - 💥중요중요!💥 : state에 여러분이 직접 접속하는 것이 금지되어 있고 불가능하다
    - 항상 누군가를 통해서 접근해야 한다.

- `reducer` : store를 만들때 reducer라는 함수를 만들어서 공급해줘야 한다.
  ```js
  function reducer(OldState, action) {
    //....
  }
  var store = Redux.CreateStore(reducer); <----- 이렇게 redux로 CreateStore메소드를 부를 때 reducer 함수를 인자로 받는다.
  ```

- `render` : UI를 만들어주는 곳
  - 현재 **state값을 참조!! 반영**해서 UI만들어 주는 곳
  ```js
  function render() {
    var state = store.getState();
    document.querySelector('#app').innerHTML = <h1>WEB</h1>...
  }
  ```
  ??!!! 그렇다면 말이야!! *state*값이 바뀔 때마다 render(UI 갱신) 할 수 있다면 넘 좋을것 같앵!! --> subscribe(구독!!!)

- `3가지의 중요한 함수 (**like 창구직원 in 은행**)` : store 안에 있는 state에 직접 접속할 수 없기 때문에 존재하는 것
  - `dispatch` : 
  - `subscribe` : 렌더함수를 subscribe의 인자로 두면 state 값이 바뀔 때마다 render가 호출된다.
  - `getState` : 
  
### 2.3 action과 reducer 

![image](https://user-images.githubusercontent.com/82071500/128976714-d94fd240-a1b6-4150-b0bd-0f487112ab29.png)
- 상황 : `submit` 버튼에 onsubmit 이벤트가 발생하면 store.dispatch에게 객체를 전달한다. 
  - 이 때 💥중요💥한 게 type을 'create'로 줬다는 것! (이게 바로 `**action**` 이다)!! 
  - action = {type:'create', payload:{titlte: title, desc: desc}}
  ```js
  <form onsubmit="
    //...
    store.dispatch({type:'create', payload:{titlte: title, desc: desc}});
  ">
  ```
  
- 그렇다면 `dispatch`의 역할이 무엇이냐?
  - 1) reducer를 호출해서 state값을 바꾼다.
  - 2) 그 작업이 끝나면 subscribe 함수를 이용해서 render함수 호출: 화면 갱신

- dispatch 가 reducer를 호출할 때 2개의 값을 전달 : 현재의 state 값을 전달, action data(객체) 전달
- reducer는 전달받은 값을 가지고 대응
  ```js
    function reducer(state, action) {
      if (action.type === 'create') {
        //위 액션에 대응한 reducer 코드가 아래에 죽~~
        var newContents = oldState.contents.concat();
        var newMaxId = oldState.maxId+1;
        newContents.push({id: newMaxId, title: action.title, desc:action.desc});
        return Object.assign({}, state, { <!-- 이 때 return 해주는 객체는 state값이 새로운 값이 됨  -->
          max_id: newMaxId,
          contents: newContents,
          mode: 'read'
        })
      } else if (
        //...
      )
    }
  ```

- reducer 는 state 입력값으로 받고 액션에 참조해서 새로운 state 값을 만들어내서 return 해주는 : state를 가공해주는 가공자이다!!
- reducer가 리턴하는 값이 새로운 스테이트 값이 된다. 
- state 값이 변경된다면 render()가 다시 호출되야 하는데
- 그것을 dispatch가 subscribe에 등록되어 있는 구독자들을 모두 호출해서 render()가 호출
<br>

## 3. Redux가 좋은 가장 중요한 이유

### 리덕스와 같은 시스템을 사용하는 중요한 이유.



몰랐던 단어 
1. payload: 전송되는 데이터, 실제 "데이터"
  - json으로 보는 실제 데이터에서의 payload는 아래의 json에서 "data"입니다.
  ```json
  {
    "status" : ,
    "from" : "localhost",
    "to" : "https://www.naver.com",
    "method" : "GET",
    "data" : {"message": "wow!!"}
  }
  ```
2. concat() : 자바스크립트 함수
  - 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.
  - 기존 배열을 변경하지 않고, 추가된 새로운 배열을 반환


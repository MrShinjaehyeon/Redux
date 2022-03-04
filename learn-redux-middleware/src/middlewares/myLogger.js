/*
미들웨어는 실무에서 직접 작성할 일은 없다.

const middleware = store => next => action => {
  // 하고 싶은 작업...
}

첫번째 store는 리덕스 스토어 인스턴스. 이 안에 dispatch, getState, subscribe 내장함수들이 들어있다.

두번째 next 는 액션을 다음 미들웨어에게 전달하는 함수. next(action) 이런 형태로 사용. 만약 다음 미들웨어가 없다면 리듀서에게 액션을 전달. 만약에 next 를 호출하지 않게 된다면 액션이 무시처리되어 리듀서에게로 전달되지 않음.
store.dispatch 를 사용하면 다른 액션을 추가적으로 발생시킬 수 도 있다.

세번째 action 은 현재 처리하고 있는 액션 객체.

*/

const myLogger = (store) => (next) => (action) => {
  console.log(action); //action 출력
  const result = next(action); //다음 미들웨어 (또는 리듀서) 에게 액션 전달.

  console.log("\t", store.getState());
  return result; // 여기서 반환하는 값은 dispatch(action)의 결과물이 됨. 기본 : undefined
};

export default myLogger;

// 미들웨어를 스토어에 적용. applyMiddleware 함수 사용. -> index.js 로 이동

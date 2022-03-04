import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./modules";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
// import myLogger from "./middlewares/myLogger";
import logger from "redux-logger"; // 대표적인 로그 기록 리덕스 미들웨어
import { composeWithDevTools } from "redux-devtools-extension"; // 리덕스 관리 크롬 확장 앱
import thunk from "redux-thunk"; // 대표적인 비동기 처리 리덕스 미들웨어
import { BrowserRouter } from "react-router-dom";

const store = createStore(
  rootReducer,
  // logger 를 사용하는 경우, logger가 가장 마지막에 와야 함.
  composeWithDevTools(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

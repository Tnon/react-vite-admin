/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-11-08 19:50:30
 * @LastEditTime: 2021-11-10 20:58:08
 */
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "@/store";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

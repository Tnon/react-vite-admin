/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-11-08 19:50:30
 * @LastEditTime: 2021-11-10 20:58:21
 */
import { HashRouter } from "react-router-dom";
import Routers from "./router";
const App: React.FC = () => {
  return (
    <HashRouter>
      <Routers />
    </HashRouter>
  );
};
export default App;

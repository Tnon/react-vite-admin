/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-11-09 17:12:54
 * @LastEditTime: 2021-11-11 15:30:45
 */
import { RouteProps, Navigate } from "react-router-dom";
import { useAppState } from "@/store";
interface GuardProps extends RouteProps {
  valid?: boolean;
}
const RouterGuard: React.FC<GuardProps> = ({ valid = true, element }) => {
  //需要登录才能访问
  if (valid) {
    const { token } = useAppState((state) => state.user);
    if (token) {
      return element as React.ReactElement;
    }
    //没有登录,跳到登录页
    return <Navigate to="/login" />;
  } else {
    //公共页面(登录/404/403/download)
    return element as React.ReactElement;
  }
};
export { RouterGuard };

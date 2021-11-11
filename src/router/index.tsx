/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-11-08 20:38:50
 * @LastEditTime: 2021-11-11 09:56:28
 */
import { Suspense } from "react";
import Transiton from "@/components/Transiton";
import { useRoutes, RouteObject } from "react-router-dom";
import { RouterGuard } from "./guard";
import { getAsyncPage } from "@/utils";
type CustomRouteObject = Omit<RouteObject, "children"> & {
  meta?: {
    icon: string;
    name: string;
  };
  children?: CustomRouteObject[];
};
//页面懒加载
const LoginPage = getAsyncPage("login");
const LayOutPage = getAsyncPage("layout");
const OverViewPage = getAsyncPage("overview");
const RiskPage = getAsyncPage("risk");
const AttackPage = getAsyncPage("attack");
const NotFound = getAsyncPage("error");
const routerList: CustomRouteObject[] = [
  {
    path: "login",
    element: <RouterGuard element={<LoginPage />} valid={false} />,
  },
  {
    path: "/",
    element: <RouterGuard element={<LayOutPage />} />,
    children: [
      {
        path: "overview",
        element: <RouterGuard element={<OverViewPage />} />,
        meta: {
          icon: "",
          name: "总览",
        },
      },
      {
        path: "risk",
        element: <RouterGuard element={<RiskPage />} />,
        meta: {
          icon: "",
          name: "风险",
        },
      },
      {
        path: "attack",
        element: <RouterGuard element={<AttackPage />} />,
        meta: {
          icon: "",
          name: "攻击",
        },
      },
      {
        path: "*",
        element: <RouterGuard element={<NotFound />} valid={false} />,
      },
    ],
  },
];
const Routers: React.FC = () => {
  const element = useRoutes(routerList);
  return <Suspense fallback={<Transiton />}>{element}</Suspense>;
};
export default Routers;

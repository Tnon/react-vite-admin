/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-11-08 20:38:50
 * @LastEditTime: 2021-11-11 15:30:50
 */
import { ReactElement, Suspense } from "react";
import Transiton from "@/components/Transiton";
import { useRoutes, RouteObject } from "react-router-dom";
import { RouterGuard } from "./guard";
import { getAsyncPage } from "@/utils";
import { UserOutlined } from "@ant-design/icons";
export type CustomRouteObject = Omit<RouteObject, "children"> & {
  meta?: {
    icon?: ReactElement;
    name?: string;
    type?: string;
  };
  children?: Array<CustomRouteObject>;
};
//页面懒加载
const LoginPage = getAsyncPage("login");
const LayOutPage = getAsyncPage("layout");
const OverViewPage = getAsyncPage("overview");
const Delevin = getAsyncPage("hero/delevin");
const WjzlPage = getAsyncPage("equip/wjzl");
const NotFound = getAsyncPage("error");
export const routerList: Array<CustomRouteObject> = [
  {
    path: "/login",
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
          icon: <UserOutlined />,
          name: "联盟",
        },
      },
      {
        path: "hero",
        meta: {
          icon: <UserOutlined />,
          name: "英雄",
        },
        children: [
          {
            path: "delevin",
            element: <RouterGuard element={<Delevin />} />,
            meta: {
              icon: <UserOutlined />,
              name: "德莱文",
            },
          },
        ],
      },
      {
        path: "equip",
        meta: {
          icon: <UserOutlined />,
          name: "装备",
        },
        children: [
          {
            path: "wjzl",
            element: <RouterGuard element={<WjzlPage />} />,
            meta: {
              icon: <UserOutlined />,
              name: "无尽之力",
            },
          },
        ],
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

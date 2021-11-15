import { createElement, FC, useEffect, useState } from "react";
import { Menu } from "antd";
import type { CustomRouteObject } from "@/router";
import { NavigateFunction, useNavigate, useLocation } from "react-router-dom";

interface MenuList {
  menuList: CustomRouteObject[];
}
const { SubMenu, Item } = Menu;

export const MenuComponent: FC<MenuList> = ({ menuList }) => {
  const nav: NavigateFunction = useNavigate();
  const clickMenu = ({ keyPath }: { keyPath: string[] }): void => {
    nav(keyPath.reverse().join("/"));
  };
  const [selectedKeys, setSelectedKeys] = useState<string>("");
  const { pathname } = useLocation();
  useEffect(() => {
    setSelectedKeys(pathname.split("/")[pathname.split("/").length - 1]);
  }, [pathname]);
  return (
    <Menu
      mode="inline"
      theme="dark"
      selectedKeys={[selectedKeys]}
      onClick={clickMenu}
    >
      {menuList
        .filter((child) => child.children)
        .map((router) => {
          {
            return router.children?.map((childc) =>
              childc.children ? (
                <SubMenu
                  key={childc.path}
                  icon={childc.meta?.icon}
                  title={childc.meta?.name}
                >
                  {childc.children?.map((routerc) => (
                    <Item key={routerc.path}>{routerc.meta?.name}</Item>
                  ))}
                </SubMenu>
              ) : childc.meta ? (
                <Item key={childc.path} icon={childc.meta?.icon}>
                  {childc.meta?.name}
                </Item>
              ) : null
            );
          }
        })}
    </Menu>
  );
};

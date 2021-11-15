/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-11-10 17:59:54
 * @LastEditTime: 2021-11-15 10:24:42
 */
import { FC, Suspense, useCallback, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { Layout, Drawer } from "antd";
import { Header } from "./header";
import { routerList } from "@/router";
import { MenuComponent } from "./menu";
const LayoutPage: FC = () => {
  const { Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const nav = useNavigate();
  useEffect(() => {
    if (location.hash === "") {
      nav("/overview");
    }
  }, [nav, location]);
  return (
    <Layout className="layout-page">
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <MenuComponent menuList={routerList} />
        </Sider>

        <Content className="layout-page-content">
          <Header setCollapsed={setCollapsed} collapsed={collapsed} />
          <Suspense fallback={<div>loading</div>}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutPage;

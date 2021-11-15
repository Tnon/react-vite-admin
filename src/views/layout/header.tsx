/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-11-15 10:25:36
 * @LastEditTime: 2021-11-15 10:25:37
 */
import React, { FC } from "react";
import "./index.less";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
export const Header: FC<{ setCollapsed: Function; collapsed: boolean }> = ({
  setCollapsed,
  collapsed,
}) => {
  const toogle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="heander">
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: toogle,
      })}
      <Avatar size={32} icon={<UserOutlined />} />
    </div>
  );
};

import { FC } from "react";

/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-11-15 10:25:36
 * @LastEditTime: 2021-11-15 10:25:37
 */
export const Header: FC<{ setCollapsed: Function; collapsed: boolean }> = ({
  setCollapsed,
  collapsed,
}) => {
  return (
    <div className="heander" onClick={() => setCollapsed(!collapsed)}>
      头部
    </div>
  );
};

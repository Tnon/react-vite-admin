/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-11-10 17:59:54
 * @LastEditTime: 2021-11-12 15:24:13
 */
import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const LayoutPage: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!location.hash) {
      navigate("/overview");
    }
  }, [navigate, location]);
  return <Outlet />;
};
export default LayoutPage;

import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

function Layout() {
  const [isVisible, setIsVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    setIsVisible(!isVisible);
  };
  return (
    <>
      <Header collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      <Sidebar isVisible={isVisible} />
      <Outlet />
    </>
  );
}

export default Layout;

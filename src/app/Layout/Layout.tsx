import { FC } from "react";
import { FloatButton } from "antd";
import { UpOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Navigation } from "./components/Navigation/Navigation";
import { Toaster } from "../../ui/Toaster/Toaster";

export const Layout: FC = () => {
  return (
    <>
      <main className="main-content">
        <Header>
          <Navigation />
        </Header>
        <div className="content-container">
          <Outlet />
        </div>
        <FloatButton.BackTop duration={100} icon={<UpOutlined />} />
        <Toaster />
        <Footer />
      </main>
    </>
  );
};

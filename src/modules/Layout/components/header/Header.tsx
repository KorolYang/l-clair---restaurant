import "./header.scss";
import { Button, Switch } from "antd";
import { FC } from "react";
import { MenuOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Search from "antd/es/transfer/search";

type THeaderProps = {
  collapsed: boolean;
  toggleCollapsed: () => void;
};

const Header: FC<THeaderProps> = ({ collapsed, toggleCollapsed }) => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__burger-menu">
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuOutlined />}
            </Button>
          </div>
          <div className="header__settings">
            <div className="search">
              <Search placeholder="Поиск" onSearch={null} style={{ width: 200 }} />
            </div>
            <div className="theme">
              <Switch checkedChildren="Light" unCheckedChildren="Dark" defaultChecked />
            </div>
            <Button>Выйти</Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

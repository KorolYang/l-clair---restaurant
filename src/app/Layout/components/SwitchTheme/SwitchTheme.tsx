import { ConfigProvider, Switch } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { useTheme } from "../../../../hooks/useTheme";
import { patchTheme } from "../../../../store/auth/asyncAction";
import { selectUser } from "../../../../store/auth/selectors";
import { useStoreDispatch } from "../../../../hooks/useStoreDispatch";
import { appStore } from "../../../../store/store";
import { useStoreSelector } from "../../../../hooks/useStoreSelector";
import "./SwitchTheme.scss";

const SwitchTheme = () => {
  const dispatch = useStoreDispatch(appStore);
  const { id, theme } = useStoreSelector(appStore, selectUser);

  useTheme();

  const onChange = () => {
    dispatch(patchTheme({ id, theme }));
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ffffff",
          colorPrimaryHover: "#808080",
        },
        components: {
          Switch: {
            handleBg: "#000000",
          },
        },
      }}
    >
      <div className="theme">
        <Switch
          className="switch"
          onClick={onChange}
          checkedChildren={<SunOutlined className="sun" />}
          unCheckedChildren={<MoonOutlined className="moon" />}
          defaultChecked={theme === "light"}
        />
      </div>
    </ConfigProvider>
  );
};

export default SwitchTheme;

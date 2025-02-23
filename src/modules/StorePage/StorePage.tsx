import { useEffect } from "react";
import { Button } from "../../ui/Button/Button";
import { menuStore } from "./store/menuStore";
import { fetchMenu } from "./store/asyncAction";
import { StoreTable } from "./components/StoreTable/StoreTable";
import { pickCategory } from "./store/action";
import { TCategory } from "./store/reducer";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import "./StorePage.scss";

const tagMenu: TCategory[] = ["все", "эклеры", "завтраки", "салаты", "напитки"];

const StorePage = () => {
  const dispatch = useStoreDispatch(menuStore);

  const onClickCategory = (tag: TCategory) => {
    dispatch(pickCategory(tag));
  };

  useEffect(() => {
    dispatch(fetchMenu());
  }, []);
  return (
    <>
      <div className="filter-menu">
        {tagMenu.map((tag, index) => (
          <Button
            key={index}
            onClick={() => onClickCategory(tag)}
            text={tag}
            className="filter-menu__btn"
          />
        ))}
      </div>
      <StoreTable />
    </>
  );
};

export default StorePage;

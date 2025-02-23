import { getCartFromLS } from "../../../utils/utils";

export type TProduct = {
  price: string;
  name: string;
  category: string;
  description: string;
  picture: string;
  id: string;
};

export type TBasketItem = TProduct & { count: number };

export type TOrder = {
  name: string;
  surname: string;
  phone: string;
  basket: TBasketItem[];
  dateCreate: string;
  id: string;
  totalPrice: number;
};

export type TCategory = "все" | "эклеры" | "завтраки" | "салаты" | "напитки";

interface TInitialState {
  card: TProduct[] | [];
  categoryActive: TCategory;
  basket: TBasketItem[] | [];
}

const initialState: TInitialState = {
  card: [],
  categoryActive: "все",
  basket: getCartFromLS(),
};

// { type, payload }: { type: string; payload: PayloadVariants },
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const menuReduser = (state: TInitialState = initialState, action: any): TInitialState => {
  switch (action.type) {
    case "GET_MENU": {
      return {
        ...state,
        card: action.payload,
      };
    }
    case "PICK_CATEGORY": {
      return {
        ...state,
        categoryActive: action.payload,
      };
    }
    case "ADD_PRODUCT": {
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    }
    case "DELETE_PRODUCT": {
      return {
        ...state,
        basket: state.basket.filter((product) => product.id !== action.payload),
      };
    }
    case "INCREASE_COUNT": {
      // const initaction.Payload = action.payload as TBasketItem;
      return {
        ...state,
        basket: state.basket.map((product) =>
          product.id === action.payload?.id
            ? // eslint-disable-next-line no-plusplus
              { ...product, count: ++action.payload.count }
            : product,
        ),
      };
    }
    case "DECREASE_COUNT": {
      return {
        ...state,
        basket: state.basket.map((product) =>
          product.id === action.payload.id
            ? // eslint-disable-next-line no-plusplus
              { ...product, count: --action.payload.count }
            : product,
        ),
      };
    }
    case "DELETE_BASKET": {
      return {
        ...state,
        basket: [],
      };
    }
    default:
      return state;
  }
};

import { lazy } from "react";

// type FuncType = () => Promise<{ default: React.ComponentType<any> }>;
// type ReturnType = Promise<{ default: React.ComponentType<any> }>;

// const wait = (func: FuncType, delay: number): ReturnType => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       func().then(resolve);
//     }, delay);
//   });
// };

// export const StorePageAsync = lazy(() => wait(() => import("./StorePage.tsx"), 3000));

export const StorePageAsync = lazy(() => import("./StorePage.tsx"));

import { Bounce, ToastContainer } from "react-toastify";

export const Toaster = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      stacked
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  );
};

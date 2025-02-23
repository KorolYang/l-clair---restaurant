import { useState, useEffect } from "react";
import { Store } from "redux";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useStoreSelector = <T>(store: Store, selector: (state: any) => T): T => {
  const [selectedState, setSelectedState] = useState<T>(() => selector(store.getState()));

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setSelectedState(selector(store.getState()));
    });

    return () => {
      unsubscribe();
    };
  }, [store, selector]);

  return selectedState;
};

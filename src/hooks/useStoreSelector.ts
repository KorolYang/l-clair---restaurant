import { useState, useEffect } from "react";
import { Store } from "redux";

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

import { useCallback, useRef } from "react";
import { effect, reactive } from "../reactivity";
import { useForceUpdate } from "./useForceUpdate";

export function useReactive(state: Record<string, any>): Record<string, any> {
  const forceUpdate = useForceUpdate();
  const storeRef = useRef();

  let store = useCallback(() => {
    let proxy = reactive(state);
    effect(state, () => {
      forceUpdate();
    });
    return proxy;
  }, []);
  storeRef.current = storeRef.current ? storeRef.current : store();
  return storeRef.current;
}

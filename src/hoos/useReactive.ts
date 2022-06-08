import { useCallback } from "react";
import { effect, reactive } from "../reactivity";
import { useForceUpdate } from "./useForceUpdate";

export function useReactive(state: Record<string, any>): Record<string, any> {
  const forceUpdate = useForceUpdate();
  let reacitve = useCallback(() => {
    let proxy = reactive(state);
    effect(state, () => {
      forceUpdate();
    });
    return proxy;
  }, []);

  return reacitve();
}

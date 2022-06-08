import { isObject } from "../shares";
import { baseHandler, Flags } from "./baseHandler";

const weakMap = new WeakMap();
function reactive(state: Record<string, any>) {
  if (!isObject(state)) return state;
  if (state[Flags.isReactivity]) return state;
  let exsiting = weakMap.get(state);
  if (exsiting) return exsiting;
  const proxy = new Proxy(state, baseHandler);
  weakMap.set(proxy, state);
  return proxy;
}

export { reactive };

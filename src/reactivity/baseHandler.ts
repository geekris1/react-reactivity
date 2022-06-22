import { isArray, isObject } from "../shares";
import { trigger } from "./effect";
import { reactive } from "./reactive";

export const enum Flags {
  isReactivity = "isReactivity",
}
const baseHandler = {
  get: (target: Record<string, any>, p: string, receiver: any) => {
    if (p === Flags.isReactivity) return true;
    return Reflect.get(target, p, receiver);
  },
  set: (target: object, p: string, value: any, receiver: any) => {
    trigger(target);
    return Reflect.set(target, p, value, receiver);
  },
};

export { baseHandler };

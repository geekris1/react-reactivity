export const targetMap = new WeakMap();

interface Runner {
  (): () => void;
  effect: ReactiveEffect;
}
class ReactiveEffect {
  public action: boolean = false;
  public deps: Set<any>[] = [];
  constructor(public fn: Function) {}
  run() {
    this.fn();
  }
  stop() {}
}

function effect(target: Record<string, any>, fn: Function) {
  const _effect = new ReactiveEffect(fn);
  track(target, _effect);
  // interface Runner 不知道为啥不好使了,改成any吧
  const runner: any = _effect.run.bind(_effect);
  runner.effect = _effect;
  return runner;
}

function track(target: Record<string, any>, activeEffect: ReactiveEffect) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Set()));
  }
  depsMap.add(activeEffect);
  activeEffect.deps = depsMap;
}

function trigger(target: object) {
  let depsMap = targetMap.get(target);
  if (depsMap) {
    depsMap.forEach((dep: ReactiveEffect) => {
      dep.run();
    });
  }
}
export { effect, trigger };

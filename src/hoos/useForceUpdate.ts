import { useCallback, useState } from "react";

export function useForceUpdate() {
  const [_, update] = useState({});
  return useCallback(() => {
    update({});
  }, []);
}

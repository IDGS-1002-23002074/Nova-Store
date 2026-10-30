import { useEffect } from "react";
export function useAsyncEffect(asyncCallback, dependencies = []) {
  useEffect(() => {
    let active = true;
    asyncCallback(() => active);
    return () => {
      active = false;
    };
  }, dependencies);
}

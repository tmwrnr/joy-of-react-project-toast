import { useKeyDown } from "./useKeydown";

export function useEscapeKey(cb) {
  useKeyDown("Escape", cb);
}

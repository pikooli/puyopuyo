import { useCallback, useEffect } from "react";
import { KEY_ACTION } from "@/constants";
import { ActionKey } from "@/types";

interface UseActionKeydown {
  reactToAction(action: string): void;
}

export function useActionKeydown(props: UseActionKeydown) {
  const { reactToAction } = props;

  const keydown = useCallback(
    (e: KeyboardEvent) => {
      const key_action = KEY_ACTION[e.code as ActionKey];
      if (key_action) {
        e.preventDefault();
        return reactToAction(key_action);
      }
    },
    [reactToAction]
  );

  useEffect(() => {
    window.document.addEventListener("keydown", keydown);
    return () => {
      window.removeEventListener("keydown", keydown);
    };
  }, [keydown]);
}

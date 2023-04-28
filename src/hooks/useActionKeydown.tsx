import { useCallback, useEffect, useContext } from "react";
import { ActionKey } from "@/types";
import { rotatePlayerSetToLeft, rotatePlayerSetToRight } from "@/utils";
import { KEY_ACTION } from "@/constants";
import { PuyoPuyoContext } from "@/context";

export function useActionKeydown() {
  const { board, playerSet, setPlayerSet } = useContext(PuyoPuyoContext);

  const keydown = useCallback(
    (e: KeyboardEvent) => {
      const key_action = KEY_ACTION[e.code as ActionKey];
      if (key_action) {
        e.preventDefault();
        switch (key_action) {
          case KEY_ACTION["KeyQ"]:
            setPlayerSet(
              rotatePlayerSetToLeft({
                board,
                playerSet,
              }) || playerSet
            );
            break;
          case KEY_ACTION["KeyW"]:
            setPlayerSet(
              rotatePlayerSetToRight({
                board,
                playerSet,
              }) || playerSet
            );
            break;
        }
      }
    },
    [board, playerSet, setPlayerSet]
  );

  useEffect(() => {
    window.document.addEventListener("keydown", keydown);
    return () => {
      window.document.removeEventListener("keydown", keydown);
    };
  }, [keydown]);
}

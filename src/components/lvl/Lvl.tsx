import { useContext } from "react";
import { PuyoPuyoContext } from "@/context";

export function Lvl() {
  const { lvl } = useContext(PuyoPuyoContext);

  return <p>Lvl: {lvl} </p>;
}

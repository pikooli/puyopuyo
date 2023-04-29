import { useContext } from "react";
import { PuyoPuyoContext } from "@/context";

export function Combo() {
  const { combo } = useContext(PuyoPuyoContext);

  return <p>Combo: {combo} </p>;
}

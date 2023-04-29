import {
  NextPlayerSet,
  Score,
  Combo,
  Lvl,
  GameState,
  ResetBtn,
} from "@/components";

export function InformationBoard() {
  return (
    <div>
      <GameState />
      <div style={style.container}>
        <Lvl />
        <Score />
        <Combo />
        <NextPlayerSet />
        <ResetBtn />
      </div>
    </div>
  );
}

const style = {
  container: {
    display: "grid",
    placeItems: "center",
    color: "black",
  },
};

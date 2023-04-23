import { GameStageView } from "./GameStage.view";
import { useGameStage } from "./GameStage.hook";

export function GameStage() {
  const GameStageHookProps = useGameStage();

  return <GameStageView {...GameStageHookProps} />;
}

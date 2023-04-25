export type GameStageViewProps = {
  mapTextures(): JSX.Element[];
  playerTextures(): JSX.Element[];
};

export const GameStageView = (props: GameStageViewProps) => {
  const { mapTextures, playerTextures } = props;
  return (
    <>
      {mapTextures()}
      {playerTextures()}
    </>
  );
};

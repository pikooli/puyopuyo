export type GameViewProps = {
  mapTextures(): JSX.Element[];
  playerTextures(): JSX.Element[];
};

export const GameView = (props: GameViewProps) => {
  const { mapTextures, playerTextures } = props;
  return (
    <>
      {mapTextures()}
      {playerTextures()}
    </>
  );
};

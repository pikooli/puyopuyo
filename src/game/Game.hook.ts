import {
  useActionKeydown,
  useMoveKeydown,
  useGameTime,
  useGenerateTextures,
  useGameResolve,
  useGameLvl,
  useGameReset,
} from "@/hooks";

export function useGame() {
  useMoveKeydown();
  useActionKeydown();
  useGameLvl();
  useGameTime();
  useGameResolve();
  useGameReset();

  const textures = useGenerateTextures();

  return textures;
}

import {
  useActionKeydown,
  useMoveKeydown,
  useGameTime,
  useGenerateTextures,
} from "@/hooks";

export function useGame() {
  useMoveKeydown();
  useActionKeydown();

  useGameTime();

  const textures = useGenerateTextures();

  return textures;
}

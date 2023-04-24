import React from "react";
import { Inter } from "next/font/google";
import { PuyoPuyoContext, ContextBridge } from "@/context";
import { useGame } from "@/hooks";
import { GameStage } from "@/game";
import { MAP_HEIGHT, MAP_WIDTH } from "@/constants";
import { Stage } from "@pixi/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const contextValue = useGame();

  return (
    <PuyoPuyoContext.Provider value={contextValue}>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <ContextBridge
          Context={PuyoPuyoContext}
          render={(children: React.ReactNode) => (
            <Stage
              width={MAP_WIDTH}
              height={MAP_HEIGHT}
              renderOnComponentChange={true}
              style={stageStyle}
              options={{ backgroundAlpha: 0, resolution: 1 }}
            >
              {children}
            </Stage>
          )}
        >
          <GameStage />
        </ContextBridge>
      </main>
    </PuyoPuyoContext.Provider>
  );
}

const stageStyle = {
  backgroundColor: "white",
  border: "1px solid black",
};

import { Game } from "./Game.container";
import React from "react";
import { PuyoPuyoContext, ContextBridge } from "@/context";
import { useGameContext } from "@/hooks";
import { MAP_HEIGHT, MAP_WIDTH } from "@/constants";
import { Stage } from "@pixi/react";
import { InformationBoard } from "@/containers";

export default function Home() {
  const contextValue = useGameContext();

  return (
    <PuyoPuyoContext.Provider value={contextValue}>
      <main style={mainStyle}>
        <InformationBoard />
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
          <Game />
        </ContextBridge>
      </main>
    </PuyoPuyoContext.Provider>
  );
}

const mainStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "24px",
};

const stageStyle = {
  backgroundColor: "white",
  border: "1px solid black",
};

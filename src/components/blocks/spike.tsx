import { useContext, useState, useEffect } from "react";
import {PlayerContext } from "@/context/playercontext";

export default function Spike(props: {
  position: {
    x: number;
    y: number;
  },
  spikeFrequenzy?: number;
  startState?: boolean;
}) {
  const players = useContext(PlayerContext);

  const [isDeadly, setIsDead] = useState(props.startState ?? false);

  useEffect(() => {
    const interval = props.spikeFrequenzy ?? 5000;
    setInterval(() => {
      setIsDead((prev) => !prev)
    }, interval)
  })

  if (players) {
    for (const player of Object.values(players)) {
      if (player.postion.x === props.position.x && player.postion.y === props.position.y) {
        player.kill();
      }
    }
  }
  return <div style={{ width: "100%", height: "100%", background: isDeadly ? "red" : "black" }}></div>;
}
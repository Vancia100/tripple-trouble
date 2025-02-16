import { useContext, useState, useEffect } from "react";
import { PlayerContext } from "../../context/playerContext";

export default function Spike(props: {
  position: {
    x: number;
    y: number;
  },
  width: number;
  spikeFrequenzy?: number;
  startState?: boolean;
}) {
  const players = useContext(PlayerContext);

  const [isDeadly, setIsDead] = useState(props.startState ?? false);

  useEffect(() => {
    const interval = props.spikeFrequenzy ?? 3000;
    const spikeInterval = setInterval(() => {
      setIsDead((prev) => !prev)
    }, interval)
    return () => clearInterval(spikeInterval)
  }, [])

  if (players) {
    for (const player of Object.values(players)) {
      if (player.position.x === props.position.x && player.position.y === props.position.y && isDeadly) {
        player.kill();
      }
    }
  }
  return (
    <img src={!isDeadly ? "/spikes_down.png" : "/spikes_up.png"} style={{ display: "block" }} width={props.width} height={props.width}></img>)
}

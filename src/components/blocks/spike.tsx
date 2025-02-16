import { useContext, useState, useEffect } from "react";
import { PlayerContext } from "../../context/playerContext";
import { BlockContext } from "../../context/blockContext";
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
  const blocks = useContext(BlockContext);
  const [isDeadly, setIsDead] = useState(props.startState ?? false);

  useEffect(() => {
    blocks.setBlocks(prev => {
      if (!prev[props.position.x]) prev[props.position.x] = {}
      prev[props.position.x][props.position.y] = {
        passable: true
      }
      return prev
    })

    const interval = props.spikeFrequenzy ?? 3000;
    const spikeInterval = setInterval(() => {
      setIsDead((prev) => !prev)
    }, interval)
    return () => clearInterval(spikeInterval)
  }, [])
 useEffect(() => {
   if (players) {
     for (const player of Object.values(players)) {
       if (player.position.x === props.position.x && player.position.y === props.position.y && isDeadly) {
         player.kill();
       }
     }
   }
 }, [players, isDeadly])
  return (
    <img src={!isDeadly ? "/spikes_down.png" : "/spikes_up.png"} style={{ display: "block" }} width={props.width} height={props.width}></img>)
}

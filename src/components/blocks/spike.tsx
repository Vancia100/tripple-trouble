import { useContext, useState, useEffect } from "react";
import { PlayerContext } from "../../context/playerContext";
import { BlockContext } from "../../context/blockContext";

import spikeUp from "../../assets/spikes_up.png"
import spikeDown from "../../assets/spikes_down.png"

export default function Spike(props: {
  position: {
    x: number;
    y: number;
  },
  width: number;
  kwargs?:{  
  spikeFrequenzy?: number;
  startState?: boolean;
  delay?: number;
  offset?: number;
  }
}) {
  const players = useContext(PlayerContext);
  const blocks = useContext(BlockContext);
  const [isDeadly, setIsDead] = useState(props.kwargs?.startState ?? false);

  useEffect(() => {
    blocks.setBlocks(prev => {
      if (!prev[props.position.x]) prev[props.position.x] = {}
      prev[props.position.x][props.position.y] = {
        passable: true
      }
      return prev
    })

    const interval = props.kwargs?.spikeFrequenzy ?? 3000;

    
    const spikeInterval = setInterval(() => {
      const revert = () => setIsDead(prev => !prev)
      if (props.kwargs?.delay) {
        setTimeout(() => {
          revert()
          setTimeout(revert, props.kwargs?.delay)
        }, props.kwargs?.offset ?? 0)
      } else {
        revert()
      }
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
    <img src={!isDeadly ? spikeDown : spikeUp} style={{ display: "block" }} width={props.width} height={props.width}></img>)
}

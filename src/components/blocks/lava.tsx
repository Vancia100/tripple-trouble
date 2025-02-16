import { useContext, useEffect } from "react";
import { PlayerContext } from "../../context/playerContext";
import { BlockContext } from "../../context/blockContext";

export default function Lava(props: {
  position: {
    x: number;
    y: number;
  },
  width: number;
}) {
  const players = useContext(PlayerContext);
  const blocks = useContext(BlockContext);

  useEffect(() => {
    blocks.setBlocks(prev => {
      if (!prev[props.position.x]) prev[props.position.x] = {}
      prev[props.position.x][props.position.y] = {
        passable: true
      }
      return prev
    })
  }, [])
 useEffect(() => {
   if (players) {
     for (const player of Object.values(players)) {
       if (player.position.x === props.position.x && player.position.y === props.position.y) {
         player.kill();
       }
     }
   }
 }, [players])
  return (
    <img src={"/lava.png"} style={{ display: "block" }} width={props.width} height={props.width}></img>)
}

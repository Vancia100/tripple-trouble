import { BlockContext } from "../../context/blockContext";
import { PlayerContext } from "../../context/playerContext";
import { useContext, useEffect, useState } from "react";

export default function Button(props: {
  position: {
    x: number;
    y: number;
  },
  width: number,
  activates: { x: number, y: number }
}) {
  const players = useContext(PlayerContext);
  const blocks = useContext(BlockContext);
  const {x, y} = props.position
  const [pressed, setIsPressed] = useState(false)

  useEffect(() => {
    blocks.blocks[props.activates.x]?.[props.activates.y]?.setIsOpen && console.log(pressed) && blocks.blocks[props.activates.x][props.activates.y].setIsOpen(pressed)
    console.log(props.activates)
  }, [pressed, blocks.blocks[props.activates.x]?.[props.activates.y]])
  useEffect(() => {
    if (players) {
      for (const player of Object.values(players)) {
        const stepedOn = player.position.x === x && player.position.y === y
        if (stepedOn) {
          console.log("pressde!")
          setIsPressed(true)
          break
        }
        setIsPressed(false)
      }
    }
  }, [players])
  return (
    <>
    <img src={pressed ? "/button_unpressed.png" : "/button_pressed.png"} style={{ display: "block" }} width={props.width} height={props.width}></img>
    </>)
}

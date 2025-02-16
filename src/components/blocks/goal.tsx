import { useContext } from "react"
import { PlayerContext } from "../../context/playerContext"

export default function Goal(props: {
  width: number,
  position: { x: number, y: number }
}) {
  const { x, y } = props.position
  const players = useContext(PlayerContext)
  if (players) {
    if (
      players["1"].position.x === x && players["1"].position.y === y &&
      players["2"].position.x === x && players["2"].position.y === y &&
      players["3"].position.x === x && players["3"].position.y === y
    ) {
      players["1"].win!()
    }
  }
  return (
    <img src={"/goal.png"} style={{ display: "block" }} width={props.width} height={props.width}></img>
  )
}

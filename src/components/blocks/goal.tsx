import { useContext, useEffect } from "react"
import { PlayerContext } from "../../context/playerContext"
import { BlockContext } from "../../context/blockContext"
export default function Goal(props: {
  width: number,
  position: { x: number, y: number }
}) {
  const { x, y } = props.position
  const players = useContext(PlayerContext)
  const blocks = useContext(BlockContext)

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
      if (
        players["1"].position.x === x && players["1"].position.y === y &&
        players["2"].position.x === x && players["2"].position.y === y &&
        players["3"].position.x === x && players["3"].position.y === y
      ) {
        players["1"].win!()
      }
    }
  }, [players])
  return (
    <img src={"/goal.png"} style={{ display: "block" }} width={props.width} height={props.width}></img>
  )
}

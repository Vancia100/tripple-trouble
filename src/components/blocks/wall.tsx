import { BlockContext } from "../../context/blockContext"
import { useContext, useEffect } from "react";

export default function Wall(props:{width: number, position: {x: number, y: number}}) {
  const {x, y} = props.position
  const blocks = useContext(BlockContext)
  useEffect(() => {
    blocks.setBlocks(prev => {
      if (!prev[x]) prev[x] = {}
      prev[x][y] = 
      {passable: false}
      return prev
    })
  }, [])
  return (
    <img src={"/wall.png"} alt="sprite" style={{display:"block"}} width={props.width} height={props.width}/>
  )
}

export const properties = {
  passable: false,
}
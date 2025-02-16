import { useEffect, useContext } from "react"
import { BlockContext } from "../../context/blockContext"

export default function GrassBlock(props: {width: number, position: {x: number, y: number}}, ) {

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
  return <img src={"/Grassblock.png"} alt="sprite" style={{display:"block"}} width={props.width} height={props.width}/>
}
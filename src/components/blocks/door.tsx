import { useEffect, useState, useContext } from "react"
import { BlockContext } from "../../context/blockContext"

export default function Door(props: {
  position: {
    x: number;
    y: number;
  }
  width: number;
}) {
  const blocks = useContext(BlockContext)

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    blocks.setBlocks(prev => {
      if (!prev[props.position.x]) prev[props.position.x] = {}
      prev[props.position.x][props.position.y] = {
        passable: isOpen,
        setIsOpen
      }
      return prev
    })
  }, [isOpen, blocks, props.position])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsOpen((prev) => !prev)
  //   }, 2000)
  //   return () => clearInterval(interval)
  // }, [])

  return (
    <img src={!isOpen ? "/door_closed.png" : "/door_open.png"} style={{ display: "block" }} width={props.width} height={props.width}></img>)
}

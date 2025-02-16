import { useEffect, useState, useContext } from "react"
import { BlockContext } from "../../context/blockContext"

import closed from "../../assets/door_closed.png"
import opened from "../../assets/door_open.png"

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
    <img src={!isOpen ? closed : opened} style={{ display: "block" }} width={props.width} height={props.width}></img>)
}

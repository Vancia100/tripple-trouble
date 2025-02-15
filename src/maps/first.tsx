import BlocksBuilder from "@/components/blockBuilder"
import Wall from "@/components/blocks/wall"
import { useEffect } from "react"
import type { MapProps } from "@/types/mapProps"

const width = 20
const height = 20

export default function FirstMap(props: MapProps){
  const {gridDimention, dimentionSeter} = props
  useEffect(() => {
    dimentionSeter({width, height})
  }, [dimentionSeter])
  return (
    <>
    <BlocksBuilder height={1} width={width}>
      <Wall width={gridDimention}/>
    </BlocksBuilder>
    <BlocksBuilder height={height-1} width={1}>
      <Wall width={gridDimention}/>
    </BlocksBuilder>
    <Wall width={gridDimention}></Wall>
    </>
  )
}
import BlocksBuilder from "../components/blockBuilder"
import Wall from "../components/blocks/wall"

export default function FirstMap(props:{
  widthSeter: (width: number) => void,
  heightSeter: (height: number) => void,
  gridDimention: number,
}) {
  const width = 20
  const height = 20
  props.widthSeter(width)
  props.heightSeter(height)
  return (
    <>
    <BlocksBuilder height={1} width={width}>
      <Wall width={props.gridDimention}/>
    </BlocksBuilder>
    <BlocksBuilder height={height-1} width={1}>
      <Wall width={props.gridDimention}/>
    </BlocksBuilder>
    <Wall width={props.gridDimention}></Wall>
    </>
  )
}
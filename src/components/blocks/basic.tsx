export default function GrassBlock(props: {width: number}) {
  return <img src={"/Grassblock.png"} alt="sprite" style={{display:"block"}} width={props.width} height={props.width}/>
}
export const properties = {
  passable: true,
}
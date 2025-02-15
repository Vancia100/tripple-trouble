type Vec2 = {
  x: number,
  y: number
}
export default function Player(props: {
  id: number,
  gridDimention: number,
  position: Vec2,
  color: string
}) {
  return (
    <img 
    src="/player.svg" 
    alt="player" 
    width={props.gridDimention} 
    height={props.gridDimention} 
    style={{position: "absolute", top: `${props.position.y*props.gridDimention}px`, left:`${props.position.x*props.gridDimention}px`, transition: "left 0.1s ease, top 0.1s ease"}}/>
  )
}
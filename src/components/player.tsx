type Vec2 = {
  x: number,
  y: number
}
export default function Player(props: {
  id: number,
  gridDimention: number,
  position: Vec2,
  color: string,
  outtlineColor: string
}) {
  return (
  <svg
  style={{position: "absolute", top: `${props.position.y*props.gridDimention}px`, left:`${props.position.x*props.gridDimention}px`, transition: "left 0.1s ease, top 0.1s ease"}}
   width={`${props.gridDimention}px`} 
   height={`${props.gridDimention}px`}
   viewBox="0 0 567.4267 567.4267"
   version="1.1"
   id="svg5"
   xmlns="http://www.w3.org/2000/svg">
  <defs
     id="defs2" />
  <g
     id="layer1"
     transform="translate(-581.60489,-258.15988)">
    <circle
       style={{fill: props.color, fillOpacity:1, stroke:props.outtlineColor, strokeWidth:22, strokeDasharray:0, strokeOpacity:1 }}
       id="path111"
       cx="865.31824"
       cy="541.87323"
       r="272.71335" />
  </g>
</svg>
  )
}
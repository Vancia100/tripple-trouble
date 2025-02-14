export default function Wall(props:{width: number}) {
  return (
    <img src={"/wall.png"} alt="sprite" style={{display:"block"}} width={props.width} height={props.width}/>
  )
}

export const properties = {
  passable: false,
}
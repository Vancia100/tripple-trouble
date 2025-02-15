export default function Door(props: {
  position: {
    x: number;
    y: number;
  }
  width: number;
}) {
  return (
    <img src={"/door_closed.png"} style={{ display: "block" }} width={props.width} height={props.width}></img>)
}

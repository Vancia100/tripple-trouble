export default function Button(props: {
  position: {
    x: number;
    y: number;
  }
  width: number;
}) {
  return (
    <img src={"/button_unpressed.png"} style={{ display: "block" }} width={props.width} height={props.width}></img>)
}

export default function Goal(props: {
  width: number;
}) {

  return (
    <img src={"/goal.png"} style={{ display: "block" }} width={props.width} height={props.width}></img>
  )
}

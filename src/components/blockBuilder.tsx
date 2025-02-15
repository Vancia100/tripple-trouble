import Wall from "../components/blocks/wall.tsx";
import GrassBlock from "./blocks/basic.tsx";
import Spike from "./blocks/spike.tsx";
import Goal from "./blocks/goal.tsx";

export default function BlocksBuilder(props: { numberMap: number[][], gridDimention: number }) {
  console.log(props.numberMap);

  return (
    props.numberMap.map((row, y) => (row.map((elem, x) => (<MapElement type={elem} gridDimention={props.gridDimention} position={{ x: x, y: y }} ></MapElement >))))
  )
}


function MapElement(props: { type: number, gridDimention: number, position: { x: number, y: number } }) {
  switch (props.type) {
    case 0: {
      return (<GrassBlock width={props.gridDimention}></GrassBlock>);
    }
    case 1: {
      return (<Wall width={props.gridDimention}></Wall>);
    }
    case 2: {
      return (<Spike width={props.gridDimention} position={props.position}></Spike>);
    }
    case 3: {
      return (<Goal width={props.gridDimention}></Goal>);
    }
    default: {
      return (<div> OJ OJ OJ </div>)
    }
  }
}

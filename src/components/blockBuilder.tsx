import { ReactNode } from "react";
import { ReactElement } from "react";
import Wall from "../components/blocks/wall.tsx";
// import spikes from "../components/blocks/spike.tsx";

export default function BlocksBuilder(props: { numberMap: number[][], gridDimention: number }) {
  console.log(props.numberMap);

  return (
    props.numberMap.map((row) => (row.map((elem) => (<MapElement type={elem} gridDimention={props.gridDimention}> </MapElement >))))
  )
}


function MapElement(props: { type: number, gridDimention: number }) {
  switch (props.type) {
    case 0: {
      return (<Wall width={props.gridDimention}> </Wall>);
    }
    case 1: {
      return (<div> x </div>);
    }
    default: {
      return (<div> OJ OJ OJ </div>)
    }
  }
}

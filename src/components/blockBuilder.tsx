import Wall from "../components/blocks/wall.tsx";
import GrassBlock from "./blocks/basic.tsx";
import Spike from "./blocks/spike.tsx";
import Goal from "./blocks/goal.tsx";
import Door from "./blocks/door.tsx";
import Button from "./blocks/button.tsx";

import { useEffect, useContext } from "react";
import { MapProps } from "../types/mapProps.ts";
import { PlayerContext } from "../context/playerContext.tsx";

export default function BlocksBuilder(props: { numberMap: MapProps, gridDimention: number, dimentionSeter: (dimention: { width: number, height: number }) => void }) {
  const theMap = props.numberMap.mapElements

  const players = useContext(PlayerContext);

  useEffect(() => {
    props.dimentionSeter({ width: theMap[0].length, height: theMap.length })
    players?.[1].setPosition(props.numberMap.startingPositions["1"])
    players?.[2].setPosition(props.numberMap.startingPositions["2"])
    players?.[3].setPosition(props.numberMap.startingPositions["3"])
  }, [])

  return (
    theMap.map((row, y) => (row.map((elem, x) => (<MapElement type={elem} gridDimention={props.gridDimention} position={{ x: x, y: y }} ></MapElement >))))
  )
}


function MapElement(props: { type: number | {block:number, kwargs?: Record<string, any>}, gridDimention: number, position: { x: number, y: number } }) {
  const comparator = typeof props.type === "number" ? props.type : props.type.block
  const kwargs = typeof props.type === "number" ? {} : props.type.kwargs
  switch (comparator) {
    case 0: {
      return (<GrassBlock width={props.gridDimention} {...kwargs}></GrassBlock>);
    }
    case 1: {
      return (<Wall width={props.gridDimention} position = {props.position} {...kwargs}></Wall>);
    }
    case 2: {
      return (<Spike width={props.gridDimention} position={props.position} {...kwargs}></Spike>);
    }
    case 3: {
      return (<Goal width={props.gridDimention} position = {props.position} {...kwargs}></Goal>);
    }
    case 4: {
      return (<Door width={props.gridDimention} position={props.position} {...kwargs}></Door>);
    }
    case 5: {
      return (<Button width={props.gridDimention} position={props.position} {...kwargs}></Button>);
    }
    default: {
      return (<div> OJ OJ OJ </div>)
    }
  }
}
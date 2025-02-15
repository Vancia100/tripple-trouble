import Wall from "../components/blocks/wall.tsx";
import GrassBlock from "./blocks/basic.tsx";
import Spike from "./blocks/spike.tsx";
import Goal from "./blocks/goal.tsx";
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

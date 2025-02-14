import { ReactNode } from "react";

export default function BlocksBuilder(props:{children: ReactNode, height: number, width: number}) {
  return (
    <div style={{gridColumn: `span ${props.width}`, gridRow: `span ${props.height}`, display: "grid", gridTemplateColumns: `repeat(${props.width}, 1fr)`, gridTemplateRows: `repeat(${props.height}, 1fr)`}}>
      {Array.from({length: props.width*props.height}).map((_ , i) => (
        <div key={i} >
          {props.children}
        </div>
      ))}
    </div>
  )

}
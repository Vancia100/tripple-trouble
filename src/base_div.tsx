import { useState, useEffect } from "react"

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

export default function BaseDiv() {
  const [width, setWidth] = useState(20)
  const [height, setHeight] = useState(20)
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
  const [gridDimention, setGridDiemntion] = useState(10)
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowDimensions(getWindowDimensions())
    return () => window.removeEventListener("resize", () => {})
    })
  }, [])
  useEffect(() => {
    const optiomalWidth = Math.floor(windowDimensions.width / width)
    const optimalHeight = Math.floor(windowDimensions.height / height)
    setGridDiemntion(Math.min(optiomalWidth, optimalHeight))
  }, [windowDimensions ,width, height])

  return (
      <div style={{display: "grid", gridTemplateColumns: `repeat(${width}, 1fr)`, gridTemplateRows: `repeat(${height}, 1fr)`}}>
        {Array.from({length: width*height}).map((_ , i) => (
          <div key={i} >
            <img src={"/wall.png"} alt="sprite" style={{display:"block"}} width={gridDimention} height={gridDimention}/>
          </div>
        )) }
      </div>
  )
}
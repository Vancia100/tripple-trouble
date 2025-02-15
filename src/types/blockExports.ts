import { ReactElement } from "react"

export type BlockExports = {
  default: (props: {width: number}) => ReactElement,
  properties: {
    passable: boolean
  }
}
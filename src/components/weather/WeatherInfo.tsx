import React, { ReactElement } from "react"
import { Temperature } from "../lib/Temperature"

export default function WeatherInfo(): ReactElement {
  return (
    <div className="flex flex-col h-full w-[50vw] justify-start">
      <div>
        Feels like: <Temperature>test</Temperature>
      </div>
      <div>
        Wind: <Temperature>test</Temperature>
      </div>
      <div>
        Air Quality: <Temperature>test</Temperature>
      </div>
    </div>
  )
}

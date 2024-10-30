import React, { ReactElement } from "react"
import { selectTemperatureNow, useSelector } from "../../lib/redux"

export default function WeatherPreview(): ReactElement {
  const currentTemperature = useSelector(selectTemperatureNow)

  return (
    <div className="flex flex-col h-full">
      <div></div>
      <div>{currentTemperature}</div>
    </div>
  )
}

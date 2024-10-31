import React, { ReactElement } from "react"
import { selectTemperatureNow, useSelector } from "../../lib/redux"
import WeatherIcon from "./WeatherIcon"
import { PreviewTemperature } from "./PreviewTemperature"

export default function WeatherPreview(): ReactElement {
  const currentTemperature = useSelector(selectTemperatureNow)

  return (
    <div className="flex flex-row h-full w-[50vw] justify-end">
      <div>
        <WeatherIcon weatherType="sunny" dayTime="day" size={160} />
      </div>
      <div className="flex flex-col py-2">
        <PreviewTemperature>{currentTemperature}</PreviewTemperature>
      </div>
    </div>
  )
}

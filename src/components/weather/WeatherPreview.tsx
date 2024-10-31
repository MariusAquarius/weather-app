import React, { ReactElement } from "react"
import {
  selectCurrentTemperature,
  selectIsCurrentlyDay,
  useSelector,
} from "../../lib/redux"
import WeatherIcon from "./WeatherIcon"
import { PreviewTemperature } from "../lib/PreviewTemperature"

export default function WeatherPreview(): ReactElement {
  const currentTemperature = useSelector(selectCurrentTemperature)
  const isDay = useSelector(selectIsCurrentlyDay) ?? true

  return (
    <div className="flex flex-row h-full w-[50vw] justify-end">
      <div>
        <WeatherIcon weatherType="sunny" isDay={isDay} size={160} />
      </div>
      <div className="flex flex-col py-2">
        <PreviewTemperature>{currentTemperature}</PreviewTemperature>
      </div>
    </div>
  )
}

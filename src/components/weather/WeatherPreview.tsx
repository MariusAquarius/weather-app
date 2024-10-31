import React, { ReactElement } from "react"
import {
  selectCurrentPrecipitationProbability,
  selectCurrentTemperature,
  selectIsCurrentlyDay,
  useSelector,
} from "../../lib/redux"
import WeatherIcon from "./WeatherIcon"
import { PreviewTemperature } from "../lib/PreviewTemperature"
import { Humidity } from "../lib/Humidity"

export default function WeatherPreview(): ReactElement {
  const currentTemperature = useSelector(selectCurrentTemperature)
  const probability: number | null = useSelector(
    selectCurrentPrecipitationProbability,
  )
  const isDay = useSelector(selectIsCurrentlyDay) ?? true

  return (
    <div className="flex flex-row h-full w-[50vw] justify-center lg:justify-end">
      <div>
        <WeatherIcon weatherType="sunny" isDay={isDay} size={160} />
      </div>
      <div className="flex flex-col py-4 gap-4">
        <PreviewTemperature>{currentTemperature}</PreviewTemperature>
        <div className="flex flex-row text-lg gap-2 justify-end">
          <WeatherIcon weatherType="rainy" isDay={true} size={30} />
          <Humidity>{probability}</Humidity>
        </div>
      </div>
    </div>
  )
}

import React, { ReactElement } from "react"
import { Temperature } from "../lib/Temperature"
import { Humidity } from "../lib/Humidity"
import {
  selectApparentTemperature,
  selectCurrentHumidity,
  selectCurrentPrecipitation,
  selectCurrentWindGusts,
  selectCurrentWindSpeed,
  useSelector,
} from "../../lib/redux"
import { Rainfall } from "../lib/Rainfall"
import { Velocity } from "../lib/Velocity"

export default function WeatherInfo(): ReactElement {
  const apparentTemperature: number | null = useSelector(
    selectApparentTemperature,
  )
  const humidity: number | null = useSelector(selectCurrentHumidity)
  const precipitation: number | null = useSelector(selectCurrentPrecipitation)
  const windSpeed: number | null = useSelector(selectCurrentWindSpeed)
  const windGusts: number | null = useSelector(selectCurrentWindGusts)
  //const windDirection: number | null = useSelector(selectCurrentWindDirection)

  return (
    <div className="flex flex-col h-full w-[50vw] justify-start">
      <div>
        <span className="text-light-gray">Feels like: </span>
        <Temperature>{apparentTemperature}</Temperature>
      </div>
      <div>
        <span className="text-light-gray">Humidity: </span>
        <Humidity>{humidity}</Humidity>
      </div>
      <div>
        <span className="text-light-gray">Precepitation: </span>
        <Rainfall>{precipitation}</Rainfall>
      </div>
      <div>
        <span className="text-light-gray">Wind speed: </span>
        <Velocity>{windSpeed}</Velocity>
        <span className="text-gray"> (10m above ground)</span>
      </div>
      <div>
        <span className="text-light-gray">Wind gusts: </span>
        <Velocity>{windGusts}</Velocity>
        <span className="text-gray"> (10m above ground)</span>
      </div>
    </div>
  )
}

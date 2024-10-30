import React, { ReactElement } from "react"
import WeatherPreview from "./WeatherPreview"
import WeatherInfo from "./WeatherInfo"
import { selectWeather, useSelector } from "@/src/lib/redux"
import { Separator } from "../shadcn/ui/separator"

export default function WeatherContent(): ReactElement {
  const weather = useSelector(selectWeather)

  return (
    <div className="flex flex-row min-h-[80vh] min-w-[80vw]">
      <WeatherPreview />
      <Separator orientation="vertical" />
      <WeatherInfo />
      {weather ? weather.hourly.temperature_2m[0] : "weather is not updated"}
    </div>
  )
}

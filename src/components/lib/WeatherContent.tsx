import React, { ReactElement } from "react"
import WeatherPreview from "./WeatherPreview"
import WeatherInfo from "./WeatherInfo"
import { Separator } from "../shadcn/ui/separator"

export default function WeatherContent(): ReactElement {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <WeatherPreview />
      <Separator orientation="vertical" />
      <WeatherInfo />
    </div>
  )
}

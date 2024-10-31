import React, { ReactElement } from "react"
import WeatherPreview from "./WeatherPreview"
import WeatherInfo from "./WeatherInfo"
import { Separator } from "../shadcn/ui/separator"

export default function WeatherContent(): ReactElement {
  return (
    <div className="flex min-h-[50vh] items-center justify-center gap-10">
      <WeatherPreview />
      <div className="h-[20vh]">
        <Separator orientation="vertical" className="bg-dark-gray" />
      </div>
      <WeatherInfo />
    </div>
  )
}

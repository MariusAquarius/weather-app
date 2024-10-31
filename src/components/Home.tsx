import React, { ReactElement } from "react"
import { useGetWeatherForBerlinQuery } from "../lib/redux"
import WeatherContent from "./weather/WeatherContent"
import Header from "./lib/Header"
import { Separator } from "./shadcn/ui/separator"

export default function Home(): ReactElement {
  const { isLoading } = useGetWeatherForBerlinQuery()

  return (
    <div className="min-h-screen flex flex-col">
      <Header isLoading={isLoading} />
      <div className="px-14">
        <Separator orientation="horizontal" className="bg-dark-gray" />
      </div>
      <WeatherContent isLoading={isLoading} />
    </div>
  )
}

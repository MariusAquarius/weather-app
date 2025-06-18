import React, { ReactElement } from "react"
import { selectCity, useSelector } from "@lib/redux"
import WeatherContent from "./weather/WeatherContent"
import Header from "./lib/Header"
import { Separator } from "./shadcn/ui/separator"
import { City } from "@lib/api-types"

export default function Home(): ReactElement {
  const city: City | null = useSelector(selectCity)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="px-14">
        <Separator orientation="horizontal" className="bg-dark-gray" />
      </div>
      <WeatherContent isDisabled={!city} />
    </div>
  )
}

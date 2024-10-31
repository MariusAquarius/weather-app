import React, { ReactElement } from "react"
import { selectDoesCityDataExist, useSelector } from "../lib/redux"
import WeatherContent from "./weather/WeatherContent"
import Header from "./lib/Header"
import { Separator } from "./shadcn/ui/separator"

export default function Home(): ReactElement {
  const isCityExisting = useSelector(selectDoesCityDataExist)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="px-14">
        <Separator orientation="horizontal" className="bg-dark-gray" />
      </div>
      <WeatherContent isDisabled={!isCityExisting} />
    </div>
  )
}

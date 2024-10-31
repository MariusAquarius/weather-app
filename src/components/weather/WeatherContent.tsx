import React, { ReactElement } from "react"
import { Separator } from "../shadcn/ui/separator"
import Spinner from "../lib/Spinner"
import WeatherPreview from "./WeatherPreview"
import WeatherInfo from "./WeatherInfo"

type WeatherContentProps = {
  isLoading?: boolean
  isDisabled?: boolean
}

export default function WeatherContent({
  isLoading,
  isDisabled,
}: WeatherContentProps): ReactElement {
  function getWeatherContent(): ReactElement {
    if (isDisabled) {
      return <div>Enter search value</div>
    } else {
      return (
        <>
          {isLoading ? (
            <Spinner size="xl" />
          ) : (
            <>
              <WeatherPreview />
              <div className="h-[20vh] hidden lg:block">
                <Separator orientation="vertical" className="bg-dark-gray" />
              </div>
              <WeatherInfo />
            </>
          )}
        </>
      )
    }
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-[50vh] items-center justify-center gap-2 lg:gap-10 px-40">
      {getWeatherContent()}
    </div>
  )
}

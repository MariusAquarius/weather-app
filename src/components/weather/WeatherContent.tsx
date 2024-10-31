import React, { ReactElement } from "react"
import { Separator } from "../shadcn/ui/separator"
import Spinner from "../lib/Spinner"
import WeatherPreview from "./WeatherPreview"
import WeatherInfo from "./WeatherInfo"
import { selectCityName, selectCountry, useSelector } from "../../lib/redux"

type WeatherContentProps = {
  isLoading?: boolean
  isDisabled?: boolean
}

export default function WeatherContent({
  isLoading,
  isDisabled,
}: WeatherContentProps): ReactElement {
  const city = useSelector(selectCityName)
  const country = useSelector(selectCountry)

  function getWeatherContent(): ReactElement {
    if (isDisabled) {
      return <div className="text-xl">Please enter a search value</div>
    } else {
      return (
        <>
          {isLoading ? (
            <Spinner size="xl" />
          ) : (
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="text-xl">
                Weather in {city}, {country}
              </div>
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-10">
                <WeatherPreview />
                <div className="h-[20vh] hidden lg:block">
                  <Separator orientation="vertical" className="bg-dark-gray" />
                </div>
                <WeatherInfo />
              </div>
            </div>
          )}
        </>
      )
    }
  }

  //add useEffect to check if geoapi has been triggered and then lazy trigger weather api
  //also check if weather api is loading here to replace isLoading prop

  return (
    <div className="flex flex-col min-h-[50vh] items-center justify-center px-40">
      {getWeatherContent()}
    </div>
  )
}

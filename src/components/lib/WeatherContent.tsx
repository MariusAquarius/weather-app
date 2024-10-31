import React, { ReactElement } from "react"
import WeatherPreview from "./WeatherPreview"
import WeatherInfo from "./WeatherInfo"
import { Separator } from "../shadcn/ui/separator"
import Spinner from "./Spinner"

type WeatherContentProps = {
  isLoading?: boolean
}

export default function WeatherContent({
  isLoading,
}: WeatherContentProps): ReactElement {
  return (
    <div className="flex min-h-[50vh] items-center justify-center gap-10">
      {isLoading ? (
        <Spinner size="xl" />
      ) : (
        <>
          <WeatherPreview />
          <div className="h-[20vh]">
            <Separator orientation="vertical" className="bg-dark-gray" />
          </div>
          <WeatherInfo />
        </>
      )}
    </div>
  )
}

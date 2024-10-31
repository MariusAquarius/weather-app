import React, { ReactElement, useEffect } from "react"
import ButtonWA from "./ButtonWA"
import {
  useDispatch,
  weatherApi,
  useSelector,
  selectIsSearchValue,
  selectIsSearchTermUpdated,
  selectSearchTerm,
  updateLastSearched,
  useLazyGetCoordinatesOfCityQuery,
  useLazyGetCurrentWeatherByCoordsQuery,
  selectCoordinates,
} from "../../lib/redux"
import { RefreshCw, Search } from "lucide-react"
import SearchBar from "./SearchBar"

export default function Header(): ReactElement {
  const dispatch = useDispatch()
  const isSearchValue = useSelector(selectIsSearchValue)
  const searchTerm = useSelector(selectSearchTerm)
  const isSearchTermUpdated = useSelector(selectIsSearchTermUpdated)

  const coordinates = useSelector(selectCoordinates)

  const [
    triggerGeoApi,
    { isLoading: isGeoApiLoading, isSuccess: isGeoApiSuccess },
  ] = useLazyGetCoordinatesOfCityQuery()
  const [triggerWeatherApi, { isSuccess: isWeatherApiSuccess }] =
    useLazyGetCurrentWeatherByCoordsQuery()

  function handleSearchButtonClick(): void {
    if (isSearchValue && isSearchTermUpdated) {
      dispatch(updateLastSearched({ lastSearched: searchTerm }))
      triggerGeoApi(searchTerm)
      //dispatch that geo api was successful
    } else {
      dispatch(weatherApi.util.resetApiState())
      //dispatch that geo api can be triggered again
    }
  }

  function getButtonContent(): ReactElement {
    if (isSearchTermUpdated || !isSearchValue) {
      return (
        <>
          <Search />
          Search
        </>
      )
    } else {
      return (
        <>
          <RefreshCw />
          Refresh
        </>
      )
    }
  }

  //remove this afterwards
  useEffect(() => {
    if (isGeoApiSuccess && !isWeatherApiSuccess) {
      triggerWeatherApi(coordinates)
    }
  }, [coordinates])

  return (
    <header className="flex flex-row min-h-[20vh] items-center justify-center gap-8">
      <SearchBar />
      <ButtonWA
        isLoading={isGeoApiLoading}
        isDisabled={!isSearchValue}
        onClick={handleSearchButtonClick}
      >
        {getButtonContent()}
      </ButtonWA>
    </header>
  )
}

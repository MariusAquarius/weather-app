import { City, CityResponse } from "@/src/lib/api-types"
import { cityApi, ReduxState } from "@lib/redux"
import { CityState } from "@lib/redux/slices/city/city-slice"
import { createSelector } from "@reduxjs/toolkit"

export const selectCityState = (state: ReduxState): CityState => state.city

export const selectSearchTerm = (state: ReduxState): string | null =>
  selectCityState(state).searchTerm

export const selectIsSearchValue = (state: ReduxState): boolean => {
  const searchTerm: string = selectSearchTerm(state) ?? ""
  return searchTerm.length >= 3
}

export const selectLastSearched = (state: ReduxState): string | null =>
  selectCityState(state).lastSearched

export const selectIsSearchTermUpdated = (state: ReduxState): boolean =>
  selectSearchTerm(state) !== selectLastSearched(state)

export const selectCity = (state: ReduxState): City | null => {
  const searchTerm: string | null = selectSearchTerm(state)
  if (searchTerm) {
    const cityApiData: CityResponse | undefined =
      cityApi.endpoints.getCoordinatesOfCity.select(searchTerm)(state).data
    return cityApiData ? cityApiData.results[0] : null
  } else return null
}

export const selectCityName = (state: ReduxState): string | null =>
  selectCity(state)?.name ?? null

export const selectCountry = (state: ReduxState): string | null =>
  selectCity(state)?.country ?? null

export const selectCoordinates = createSelector([selectCity], city => {
  if (city) {
    return {
      longitude: city.longitude,
      latitude: city.latitude,
    }
  } else return null
})

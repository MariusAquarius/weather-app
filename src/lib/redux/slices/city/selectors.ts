import { CityInfo } from "@/src/lib/api-types"
import { ReduxState } from "../../store"
import { CityState } from "./city-slice"
import { createSelector } from "@reduxjs/toolkit"

export const selectCityState = (state: ReduxState): CityState => state.city

export const selectSearchTerm = (state: ReduxState): string | null =>
  selectCityState(state).searchTerm

export const selectIsSearchValue = (state: ReduxState): boolean =>
  selectSearchTerm(state) ? true : false

export const selectLastSearched = (state: ReduxState): string | null =>
  selectCityState(state).lastSearched

export const selectIsSearchTermUpdated = (state: ReduxState): boolean =>
  selectSearchTerm(state) !== selectLastSearched(state)

export const selectCity = (state: ReduxState): CityInfo | null =>
  selectCityState(state).city

export const selectCityName = (state: ReduxState): string | null =>
  selectCity(state)?.city ?? null

export const selectCountry = (state: ReduxState): string | null =>
  selectCity(state)?.country ?? null

export const selectCoordinates = createSelector([selectCity], city => {
  return {
    long: city?.long ?? null,
    lat: city?.lat ?? null,
  }
})

export const selectAreCoordinates = createSelector(
  [selectCity],
  city => !!(city?.long && city?.lat),
)

export const selectDoesCityDataExist = (state: ReduxState): boolean | null =>
  selectCityName(state) ? true : false

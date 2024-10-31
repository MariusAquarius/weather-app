import { CityInfo, Coordinates } from "@/src/lib/api-types"
import { ReduxState } from "../../store"
import { CityState } from "./city-slice"

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

export const selectCoordinates = (state: ReduxState): Coordinates => {
  return {
    long: selectCity(state)?.long ?? 0,
    lat: selectCity(state)?.lat ?? 0,
  }
}

export const selectDoesCityDataExist = (state: ReduxState): boolean | null =>
  selectCityName(state) ? true : false

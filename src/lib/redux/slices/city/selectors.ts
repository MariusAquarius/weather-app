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

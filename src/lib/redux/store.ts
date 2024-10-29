import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  TypedUseSelectorHook,
} from "react-redux"
import { weatherApi, weatherSlice } from "./slices"

export type ReduxStore = typeof reduxStore
export type ReduxState = ReturnType<typeof reduxStore.getState>
export type ReduxDispatch = typeof reduxStore.dispatch
export type ReduxThunkAction<
  ActionType extends Action,
  ReturnType = void,
> = ThunkAction<ReturnType, ReduxState, unknown, ActionType>

const reducer = {
  weather: weatherSlice.reducer,
  [weatherApi.reducerPath]: weatherApi.reducer,
}

export function setupStore() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(weatherApi.middleware),
  })
}

export const reduxStore = setupStore()

export const useDispatch = useReduxDispatch<ReduxDispatch>
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector

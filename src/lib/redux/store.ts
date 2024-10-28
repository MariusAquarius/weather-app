import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  TypedUseSelectorHook,
} from "react-redux"
import { productsSlice } from "./slices"

export type ReduxStore = typeof reduxStore
export type ReduxState = ReturnType<typeof reduxStore.getState>
export type ReduxDispatch = typeof reduxStore.dispatch
export type ReduxThunkAction<
  ActionType extends Action,
  ReturnType = void,
> = ThunkAction<ReturnType, ReduxState, unknown, ActionType>

const reducer = {
  products: productsSlice.reducer,
}

export function setupStore() {
  return configureStore({
    reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
  })
}

export const reduxStore = setupStore()

export const useDispatch = useReduxDispatch<ReduxDispatch>
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector

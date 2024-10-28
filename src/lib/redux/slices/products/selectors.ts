import { ReduxState } from "../../store"
import { Product } from "./products-slice"

export const selectAllProducts = (state: ReduxState): Product[] =>
  state.products

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type Product = {
  id: string
  name: string
}

export type ProductsState = Product[]

const initialState: ProductsState = [
  {
    id: "0",
    name: "cookie",
  },
]

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProduct(
      state,
      action: PayloadAction<{
        idOfProductToUpdate: string
        newProduct: Product
      }>,
    ) {
      const newProduct: Product = action.payload.newProduct
      const id: string = action.payload.idOfProductToUpdate

      state = state.map(product => {
        if (product.id === id) {
          return newProduct
        } else {
          return product
        }
      })
    },
  },
})

export const { updateProduct } = productsSlice.actions

import React, { ReactElement } from "react"
import { updateProduct, useDispatch } from "../lib/redux"

export default function Home(): ReactElement {
  const dispatch = useDispatch()

  const examplePayload = {
    idOfProductToUpdate: "0",
    newProduct: {
      id: "1",
      name: "cake",
    },
  }

  return (
    <header className="App-header">
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <a
        className="App-link"
        onClick={() => dispatch(updateProduct(examplePayload))}
      >
        update state value
      </a>
    </header>
  )
}

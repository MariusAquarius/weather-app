import React, { ChangeEvent, ReactElement } from "react"
import { Input } from "../shadcn/ui/input"
import {
  selectSearchTerm,
  updateSearchTerm,
  useDispatch,
  useSelector,
} from "../../lib/redux"

export default function SearchBar(): ReactElement {
  const dispatch = useDispatch()
  const searchValue = useSelector(selectSearchTerm) ?? ""

  function handleSearchValueChange(event: ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value
    dispatch(updateSearchTerm({ searchTerm }))
  }

  return (
    <div className="flex items-center">
      <Input
        className={`
          bg-black placeholder:text-light-gray h-12 min-w-80 text-md 
          border-2 border-light-gray focus-visible:border-3 focus-visible:border-white 
          focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-0
        `}
        type="text"
        value={searchValue}
        placeholder="Search for your city..."
        onChange={handleSearchValueChange}
      ></Input>
    </div>
  )
}

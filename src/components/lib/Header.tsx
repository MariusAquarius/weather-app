import React, { ReactElement } from "react"
import ButtonWA from "./ButtonWA"
import {
  useDispatch,
  weatherApi,
  useSelector,
  selectIsSearchValue,
  selectIsSearchTermUpdated,
  selectSearchTerm,
  updateLastSearched,
} from "../../lib/redux"
import { RefreshCw, Search } from "lucide-react"
import SearchBar from "./SearchBar"

type HeaderProps = {
  isLoading?: boolean
}

export default function Header({ isLoading }: HeaderProps): ReactElement {
  const dispatch = useDispatch()
  const isSearchValue = useSelector(selectIsSearchValue)
  const searchTerm = useSelector(selectSearchTerm)
  const isSearchTermUpdated = useSelector(selectIsSearchTermUpdated)

  function handleSearchButtonClick(): void {
    if (isSearchValue && isSearchTermUpdated) {
      dispatch(updateLastSearched({ lastSearched: searchTerm }))
    } else {
      dispatch(weatherApi.util.resetApiState())
    }
  }

  function getButtonContent(): ReactElement {
    if (isSearchTermUpdated || !isSearchValue) {
      return (
        <>
          <Search />
          Search
        </>
      )
    } else {
      return (
        <>
          <RefreshCw />
          Refresh
        </>
      )
    }
  }

  return (
    <header className="flex flex-row min-h-[20vh] items-center justify-center gap-8">
      <SearchBar />
      <ButtonWA
        isLoading={isLoading}
        isDisabled={!isSearchValue}
        onClick={handleSearchButtonClick}
      >
        {getButtonContent()}
      </ButtonWA>
    </header>
  )
}

import React, { ReactElement, SyntheticEvent } from "react"
import ButtonWA from "./ButtonWA"
import {
  useDispatch,
  useSelector,
  selectIsSearchValueValid,
  selectIsSearchTermUpdated,
  selectSearchTerm,
  updateLastSearched,
  useLazyGetCoordinatesOfCityQuery,
} from "@lib/redux"
import { RefreshCw, Search } from "lucide-react"
import SearchBar from "./SearchBar"

export default function Header(): ReactElement {
  const dispatch = useDispatch()
  const isSearchValueValid: boolean = useSelector(selectIsSearchValueValid)
  const searchTerm: string | null = useSelector(selectSearchTerm)
  const isSearchTermUpdated: boolean = useSelector(selectIsSearchTermUpdated)

  const [triggerGeoApi, { isLoading }] = useLazyGetCoordinatesOfCityQuery()

  function handleSearchButtonActivated(): void {
    if (searchTerm && isSearchValueValid && isSearchTermUpdated) {
      dispatch(updateLastSearched({ lastSearched: searchTerm }))
      triggerGeoApi(searchTerm)
    }
  }

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()
    handleSearchButtonActivated()
  }

  function getButtonContent(): ReactElement {
    if (isSearchTermUpdated || !isSearchValueValid) {
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
    <header
      className="flex flex-col md:flex-row min-h-[20vh] items-center justify-center gap-8"
      data-testid="app-header"
    >
      <form
        className="contents"
        onSubmit={(event: SyntheticEvent) => handleSubmit(event)}
      >
        <SearchBar />
        <ButtonWA
          isLoading={isLoading}
          isDisabled={!isSearchValueValid}
          onClick={handleSearchButtonActivated}
          data-testid="header-search-button"
        >
          {getButtonContent()}
        </ButtonWA>
      </form>
    </header>
  )
}

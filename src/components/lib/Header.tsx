import React, { ReactElement } from "react"
import ButtonWA from "./ButtonWA"
import { useDispatch, weatherApi, updateCurrentTime } from "../../lib/redux"
import { RefreshCw } from "lucide-react"

type HeaderProps = {
  isLoading?: boolean
}

export default function Header({ isLoading }: HeaderProps): ReactElement {
  const dispatch = useDispatch()

  function handleRefreshButtonClick(): void {
    dispatch(updateCurrentTime())
    dispatch(weatherApi.util.resetApiState())
  }

  return (
    <header className="flex flex-row min-h-[20vh] items-center justify-center">
      <ButtonWA isLoading={isLoading} onClick={handleRefreshButtonClick}>
        <RefreshCw />
        Refresh
      </ButtonWA>
    </header>
  )
}

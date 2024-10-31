import React, { PropsWithChildren, ReactElement } from "react"
import { Button } from "../shadcn/ui/button"
import Spinner from "./Spinner"

type ButtonProps = {
  isLoading?: boolean
  disabled?: boolean
  onClick?: () => void
}

export default function ButtonWA({
  isLoading,
  disabled,
  onClick,
  children,
}: PropsWithChildren<ButtonProps>): ReactElement {
  return (
    <Button
      disabled={isLoading || disabled}
      onClick={onClick}
      variant="secondary"
      className="bg-light-gray h-12"
    >
      {isLoading ? <Spinner /> : null}
      {children}
    </Button>
  )
}

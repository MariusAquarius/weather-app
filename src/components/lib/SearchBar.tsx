import React, { ReactElement } from "react"
import { Input } from "../shadcn/ui/input"
import { Search } from "lucide-react"

export default function SearchBar(): ReactElement {
  return (
    <div className="flex items-center gap-2">
      <Search className="w-8 h-8" />
      <Input
        className={`
          bg-black placeholder:text-light-gray h-12 min-w-80 text-md 
          border-2 border-light-gray focus-visible:border-3 focus-visible:border-white 
          focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-0
        `}
        type="text"
        placeholder="Search for your city..."
      ></Input>
    </div>
  )
}

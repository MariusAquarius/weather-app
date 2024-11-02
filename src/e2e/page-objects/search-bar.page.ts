import { Page } from "@playwright/test"

export class SearchBarPageObject {
  readonly page: Page
  readonly inputValue: string

  constructor(page: Page, inputValue: string) {
    this.page = page
    this.inputValue = inputValue
  }
}

import { Locator, Page } from "@playwright/test"

export class SearchBarPageObject {
  readonly page: Page
  readonly searchInput: Locator
  readonly searchButton: Locator

  constructor(page: Page) {
    this.page = page
    this.searchInput = this.page.getByTestId("header-search-input")
    this.searchButton = this.page.getByTestId("header-search-button")
  }

  async getSearchInput(): Promise<string> {
    return await this.searchInput.inputValue()
  }

  async enterSearchValue(searchTerm: string): Promise<void> {
    await this.searchInput.fill(searchTerm)
  }

  async isButtonDisabled(): Promise<boolean> {
    return await this.searchButton.isDisabled()
  }

  async clickSearchButton(): Promise<void> {
    await this.searchButton.click()
  }
}

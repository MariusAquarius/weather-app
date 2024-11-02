import { Page } from "@playwright/test"

export class SearchButtonPageObject {
  readonly page: Page
  readonly isRefresh: boolean

  constructor(page: Page, isRefresh: boolean) {
    this.page = page
    this.isRefresh = isRefresh
  }
}

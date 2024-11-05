import { test, expect, Locator } from "@playwright/test"
import { HomePageObject } from "./page-objects/home.page"

let homePage: HomePageObject

test.beforeEach(async ({ page }) => {
  homePage = new HomePageObject(page)
  await homePage.goto()
})

test("has header component", async () => {
  const headerLocator: Locator = await homePage.getHeader()
  const isLocator: boolean = (await headerLocator.count()) > 0
  expect(isLocator).toBeTruthy()
})

test("has weather content component", async () => {
  const weatherContentLocator: Locator = await homePage.getHeader()
  const isLocator: boolean = (await weatherContentLocator.count()) > 0
  expect(isLocator).toBeTruthy()
})

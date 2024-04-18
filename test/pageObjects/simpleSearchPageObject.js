const ParentPageObject = require('./parentPageObject')

class SimpleSearchPageObject extends ParentPageObject {
  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('')
  }

  async verifyHomePage () {
    const acceptCookiesButton = $('button=Accept All Cookies')
    acceptCookiesButton.click()
    await this.isElementEqualToExpected($('h2=Student deals of the day'), 'Student deals of the day')
  }

  async clickSearchButton () {
    const searchButton = $('button[data-testid="nav-search-desktop"]')
    searchButton.click()
    const searchModal = await $('div[data-testid="modal-overlay"]')
    const isDisplayed = searchModal.isDisplayed();
    await this.isElementDisplayed(isDisplayed)
  }


}

module.exports = SimpleSearchPageObject

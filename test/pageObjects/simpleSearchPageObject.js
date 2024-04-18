const ParentPageObject = require('./parentPageObject')

class SimpleSearchPageObject extends ParentPageObject {
  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('https://studentbeans.com/')
    //browser.debug()
  }

  async verifyHomePage () {
    //await $('h2').waitForDisplayed()
    //await this.isElementEqualToExpected($('h2=Student deals of the day'), 'Student deals of the day')
    const heading2 = await $('h2=Student deals of the day')
    await expect($('h2=Student deals of the day'), 'Student deals of the day')
  }

  // async verifySubheading() {
  //   await expect($('h2=Student deals of the day'))
  // }


}

module.exports = SimpleSearchPageObject

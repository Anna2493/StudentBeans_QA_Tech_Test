const { Given, When, Then } = require('@cucumber/cucumber')
const SelectTrendPageObject = require('../pageObjects/selectTrendPageObject')

const selectTrendPageObject = new SelectTrendPageObject()

When('I click on {string} navigation link', async (navigation) => {
    await selectTrendPageObject.clickNavigationButton(navigation)
  })


//  When I select the 6th discount from the list
//  Then I should see this discount details
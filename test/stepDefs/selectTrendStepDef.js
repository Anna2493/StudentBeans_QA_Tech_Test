const { When, Then } = require('@cucumber/cucumber')
const SelectTrendPageObject = require('../pageObjects/selectTrendPageObject')

const selectTrendPageObject = new SelectTrendPageObject()

When('I click on "Trending Now" navigation link', async () => {
    await selectTrendPageObject.clickNavigationButton()
    await selectTrendPageObject.verifyTrendingPage()
  })

When('I select the {int}th discount from the list', async(item) => {
  await selectTrendPageObject.selectItemFromList(item)
})

Then('I should see this discount details', async() =>{
  await selectTrendPageObject.verifyDiscountAppears()
})
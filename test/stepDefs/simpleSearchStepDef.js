const { Given } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given(/^I am on the studentbeans homepage$/, async () => {
  await simpleSearchPageObject.goToHomePage()
  await simpleSearchPageObject.verifyHomePage()
  
})

// Then('the subheading is "Student deals of the day"', async () => {
//   await simpleSearchPageObject.verifySubheading()
// })

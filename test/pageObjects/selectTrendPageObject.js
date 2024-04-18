const ParentPageObject = require('./parentPageObject')

class SelectTrendPageObject extends ParentPageObject{

    async clickNavigationButton(navigation){
        const navigationButton = $(`a=(${navigation})`)
        navigationButton.click()
           
      }
}

module.exports = SelectTrendPageObject
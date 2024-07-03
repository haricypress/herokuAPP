
describe('verify table data', () => {
  var jsonData
  before("", () => {

    //loading test data from json file
    cy.fixture("testData").then($data => {
      jsonData = $data
    })
  })
  it('verify test data with table data', () => {
    
    //visit webPage
    cy.visit('https://testpages.herokuapp.com/styled/tag/dynamic-table.html')
    cy.contains("Table Data").click()
    cy.get("#jsondata").clear().type(JSON.stringify(jsonData), { parseSpecialCharSequences: false })
    cy.get("#refreshtable").click()

    //assert JSON test data with table data
    jsonData.forEach(data => {
      cy.get('#dynamictable').contains(data.name).should("be.visible")
      cy.get('#dynamictable').contains(data.age).should("be.visible")
      cy.get('#dynamictable').contains(data.gender).should("be.visible")


    })
  })
})
describe(`Home`, function() {

  it(`loads`, function() {
    cy.visit(`/`)
    cy.get(`h1`).should(`have.text`, `Tools for Linguistic Productivity (TooLiP)`)
  })

})

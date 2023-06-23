/* eslint-disable no-undef */
describe('template spec', () => {
    beforeEach(() => {
        indexedDB.deleteDatabase('myDB')
        cy.viewport(354, 500)
        cy.visit('http://localhost:3000/quotes')
        cy.wait(2000)
    })

    it('passes', () => {
        cy.get('[data-testid="search-text"]', { timeout: 10000 }).type('love')
    })
})

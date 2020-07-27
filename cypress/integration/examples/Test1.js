/// <reference types="Cypress" />
describe('My First Test Suite', function() 
{

it('My FirstTest case', function() {
cy.visit("https://www.google.co.th/")
cy.wait(2000)
cy.get('.gLFyf').should('have.length',1)
cy.get('.gLFyf').type("cypress")

})

  
})
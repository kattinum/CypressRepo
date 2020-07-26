/// <reference types="Cypress" />

describe('My 2nd practice Suite', function() 
{
    it('checkbox practice', function() {

       //cy.visit('https://rahulshettyacademy.com/AutomationPractice')
       cy.visit(Cypress.env('url')+"/AutomationPractice/")
// .
//         //checkBox practices more info go to => https://docs.cypress.io/api/commands/check.html#Values

//         cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
//         cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
//        // cy.get('input[type="checkbox"]').check(['option1', 'option2', 'option3'])

//         cy.get('input[type="checkbox"]').should('be.visible') // Passes
//   .check({ force: true }).should('be.checked') 
//     })


        //Static Dropdown
        
 //       cy.get('select').select('option2').should('have.value','option2')

        //Dynamic Dropdown
        //   cy.get('#autocomplete').type('ind')

        //   cy.get('.ui-menu-item div').each(($el, index, $list) => {

        //     if($el.text()==="India")
        //     {
        //         $el.click()
        //     }
        // })
        // cy.get('#autocomplete').should('have.value','India')


        //Handle visible/invisible elements
        // cy.get('#displayed-text').should('be.visible')
        // cy.get('#hide-textbox').click()
        // cy.get('#displayed-text').should('not.be.visible')
        // cy.get('#show-textbox').click()
        // cy.get('#displayed-text').should('be.visible')

        //Handle radio button
        // cy.get('[for="radio1"] > .radioButton').check().should('have.value','radio1')
        // cy.wait(5000)
        // cy.get('[value="radio2"]').check().should('be.checked')
        //cy.get('input[type="radio"]').check(['radio1','radio2','radio3'])

        //alert
        //  cy.get('#alertbtn').click()
        //  cy.get('[value="Confirm"]').click()

        //window:alert
        // cy.on('window:alert',(str) => {

        //     //chai
        //     expect(str).to.equal('Hello , share this practice page and share your knowledge')
        // })

        // cy.on('window:confirm',(str) => {

        //     //chai
        //     expect(str).to.equal('Hello , Are you sure you want to confirm?')
        //})

        //open child webpage in the same window
        // cy.get('#opentab').invoke('removeAttr','target').click()
        
        // cy.url().should('include','index')
        // cy.wait(2000)
        
        //go command
        // cy.go('back')
        // cy.url().should('contains','Practice')

        //Web Table

        // cy.get('tr > td:nth-child(2)').each(($el, index, $list) => {

        //         const text=$el.text()
        //         if(text.includes("Python"))
        //         {
        //             cy.get('tr > td:nth-child(2)').eq(index).next().then(function(price)
        //             {
        //                 const priceText = price.text()
        //                 expect(priceText).to.equal('25')
        //             })
                
        //         }

        //     })

        //Mouse hover

            cy.get('.mouse-hover-content').invoke('show')
            cy.contains('Top').click()
            cy.url().should('include','top')

        //Click invisible element     
            // cy.contains('Top').click({force:true})
            // cy.url().should('include','top')

        //cypress does not support child webpage that's why we're using removeAttr
        //visit method does not support multiple domain
        // cy.get('#opentab').then(function(el)
        // {
        //     const url=el.prop('href')
        //     cy.log(url)
        //     cy.visit(url)
        // })
        
    })

})
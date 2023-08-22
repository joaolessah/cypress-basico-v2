/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    
    beforeEach(()=>{cy.visit('./src/index.html')})

    it('verifica o título da aplicação', function() {
        
       cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

    })

    it('preenche os campos obrigatórios e envia o formulário', function(){

        cy.get('#firstName').type('João')
        cy.get('#lastName').type('Lessa')
        cy.get('#email').type('joaovictorlessa98@gmail.com')
        cy.get('#open-text-area').type('Gostaria de tirar uma dúvida sobre o produto e gostaria de dizer que ele é muito bom e interesante', {delay: 0})
        cy.get('#white-background > form > button').click()
        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){

        cy.get('#firstName').type('João')
        cy.get('#lastName').type('Lessa')
        cy.get('#email').type('joaovictorlessa98@gmail,com')
        cy.get('#open-text-area').type('Gostaria de tirar uma dúvida sobre o produto e gostaria de dizer que ele é muito bom e interesante', {delay: 0})
        cy.get('#white-background > form > button').click()
        cy.get('.error').should('be.visible')
    })

    it('verificar se o telefone é um valor não-numérico', function(){
        cy.get('#firstName').type('João')
        cy.get('#lastName').type('Lessa')
        cy.get('#email').type('joaovictorlessa98@gmail,com')
        cy.get('#phone').type('teste').should('be.empty')
    })

})
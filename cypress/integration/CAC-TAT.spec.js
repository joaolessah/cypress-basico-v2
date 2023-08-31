/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    
    //AULA 1
    beforeEach(()=>{cy.visit('./src/index.html')})

    it('verifica o título da aplicação', function() {
        
       cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

    })


    // AULA 2 - 8 EXERCICIOS
    it('preenche os campos obrigatórios e envia o formulário', function(){

        cy.get('#firstName').type('João')
        cy.get('#lastName').type('Lessa')
        cy.get('#email').type('joaovictorlessa98@gmail.com')
        cy.get('#open-text-area').type('Gostaria de tirar uma dúvida sobre o produto e gostaria de dizer que ele é muito bom e interesante', {delay: 0})
        cy.contains("button", "Enviar").click()
        cy.get('.success').should('be.visible')
       
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){

        cy.get('#firstName').type('João')
        cy.get('#lastName').type('Lessa')
        cy.get('#email').type('joaovictorlessa98@gmail,com')
        cy.get('#open-text-area').type('Gostaria de tirar uma dúvida sobre o produto e gostaria de dizer que ele é muito bom e interesante', {delay: 0})
        cy.contains("button", "Enviar").click()
        cy.get('.error').should('be.visible')
    })

    it('verificar se o telefone é um valor não-numérico', function(){
        cy.get('#firstName').type('João')
        cy.get('#lastName').type('Lessa')
        cy.get('#email').type('joaovictorlessa98@gmail,com')
        cy.get('#phone').type('teste').should('be.empty')
    })

    
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        cy.get('#firstName').type('João')
        cy.get('#lastName').type('Lessa')
        cy.get('#phone-checkbox').click()
        cy.get('#email').type('joaovictorlessa98@gmail,com')
        cy.contains("button", "Enviar").click()
        cy.get('.error').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
        
        // digita os valores
        cy.get('#firstName')
            .type('João')
            .should('have.value', 'João')
            .clear()
            .should('have.value', '')
        cy.get('#lastName')
            .type('Lessa')
            .should('have.value', 'Lessa')
            .clear()
            .should('have.value', '')
        cy.get('#email')
            .type('joaovictorlessa98@gmail.com')
            .should('have.value', 'joaovictorlessa98@gmail.com')
            .clear()
            .should('have.value', '')
        cy.get('#phone')
            .type('989158365')
            .should('have.value', '989158365')
            .clear()
            .should('have.value', '')
    })


    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
        cy.contains("button", "Enviar").click()
        cy.get('.error').should('be.visible')
    })

    it('envia o formuário com sucesso usando um comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
    })

    //AULA 3

    it.only('seleciona um produto (YouTube) por seu texto', function(){
        cy.get('select')
            .select('YouTube')
            .should('have.value', 'youtube')
       
    })
    it.only('seleciona um produto (Mentoria) por seu valor (value)', function(){
        cy.get('select')
            .select('mentoria')
            .should('have.value', 'mentoria')
    })
    it.only('seleciona um produto (Blog) por seu índice', function(){
        cy.get('select')
            .select(1)
            .should('have.value', 'blog')
    })
})
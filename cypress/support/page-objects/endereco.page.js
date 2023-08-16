class EnderecoPage {

    editarEnderecoFaturamento(nome, sobrenome, empresa, pais, endereco, numeroRua, cidade, estado, cep, celular, email){        
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').type(pais+'{enter}')
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(numeroRua)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').type(estado+'{enter}')
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(celular)
        cy.get('#billing_email').clear().type(email)
        cy.get(':nth-child(2) > .button').click()
        }

    editarEnderecoEntrega(nome, sobrenome, empresa, pais, endereco, numeroRua, estado, cidade, cep){
        cy.get(':nth-child(2) > .title > .edit').click()
        cy.get('#shipping_first_name').clear().type(nome)
        cy.get('#shipping_last_name_field').clear().type(sobrenome)
        cy.get('#shipping_company').clear().type(empresa)
        cy.get('#select2-shipping_country-container').type(pais+'{enter}')
        cy.get('#shipping_address_1').clear().type(endereco)
        cy.get('#shipping_address_2').clear().type(numeroRua)
        cy.get('#shipping_city').clear().type(estado)
        cy.get('#select2-shipping_state-container').type(cidade+'{enter}')
        cy.get('#shipping_postcode').clear().type(cep)
        cy.get(':nth-child(2) > .button').click()
    }
}

export default new EnderecoPage()
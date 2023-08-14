/// <reference types="cypress"/>

describe('Endereços de faturamento e entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        //cy.login('aluno_ebac@teste.com', 'teste@teste.com')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
    });

    it('Deve fazer o cadastro do endereço de faturamento com sucesso!', () => {
    });
});
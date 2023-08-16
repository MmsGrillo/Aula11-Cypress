/// <reference types="cypress"/>
import EnderecoPage from "../support/page-objects/endereco.page"

describe('Endereços de faturamento e entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        //cy.login('aluno_ebac@teste.com', 'teste@teste.com')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })        
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
    });

    it('Deve fazer o cadastro do endereço de faturamento com sucesso!', () => {
        EnderecoPage.editarEnderecoFaturamento('Bicho', 'da Goiaba', 'EBAC', 'brasil', 'Av. Brasil', '222', 'São Paulo', 'São paulo', '01001001', '11987654321', 'aluno_ebac@teste.com')
    });

    it('Deve fazer o cadastro do endereço de entrega com sucesso', () => {
        EnderecoPage.editarEnderecoEntrega('Bicho', 'da Goiaba', 'EBAC', 'brasil', 'Av. Paulista', '1010', 'São Paulo', 'sao paulo', '01010101')
    });
});
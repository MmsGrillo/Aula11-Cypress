/// <reference types="cypress"/>
import EnderecoPage from "../support/page-objects/endereco.page"
const dadosEndereco = require('../fixtures/endereco.json')

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
    it('Deve fazer o cadastro do endereço de faturamento com sucesso! - Massa de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numeroRua,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email)
    });

    it('Deve fazer o cadastro do endereço de entrega com sucesso', () => {
        EnderecoPage.editarEnderecoEntrega('Bicho', 'da Goiaba', 'EBAC', 'brasil', 'Av. Paulista', '1010', 'São Paulo', 'sao paulo', '01010101')
    });

    it.only('Deve fazer o cadastro do endereço de entrega com sucesso - Massa de dados', () => {
        EnderecoPage.editarEnderecoEntrega(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].numeroRua,
            dadosEndereco[0].estado,
            dadosEndereco[0].cidade,
            dadosEndereco[0].cep
        )
    });
});
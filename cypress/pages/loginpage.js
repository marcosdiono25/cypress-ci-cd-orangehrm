import Metodos from "../utils/metodos";

class LoginPage {
 
    elementos = {
        nomeUsuario: () => cy.get('[name="username"]'),
        senhaUsuario: () => cy.get('[name="password"]'),
        loginBtn: () => cy.get('.oxd-button')
    }

    acessarSite() {
        cy.visit('/');
    }

    login(usuario, senha) {
        Metodos.preencher(this.elementos.nomeUsuario, usuario);
        Metodos.preencher(this.elementos.senhaUsuario, senha);
        Metodos.clicar(this.elementos.loginBtn);
    }

    validarLoginComSucesso() {
        Metodos.validarPresenca (()=> cy.get(':nth-child(8) > .oxd-main-menu-item > .oxd-text'));
        Metodos.validarAusencia (()=> cy.get('[name="password"]'));
    }

    validarLoginCredenciaisInvalidas(){
        Metodos.validarPresenca (() => cy.get('.oxd-alert-content > .oxd-text'));
    }

    validarLoginCamposVazios(){
        Metodos.validarPresenca (() => cy.get('.oxd-input-group > .oxd-text'));
    }

}

export default LoginPage;
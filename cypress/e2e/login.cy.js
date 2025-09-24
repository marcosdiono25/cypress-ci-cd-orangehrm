import LoginPage from "../pages/loginpage"; 

describe('Testes de Logim OrangeHRM', () => {
    const loginPage = new LoginPage();
    const usuarioValido = nome;
    const senhaValida = senha;
    const usuarioInvalido = 'UsuarioInvalido';
    const senhaInvalida = 'SenhaInvalida';
    

    it('Login com sucesso', () => {
        loginPage.acessarSite();
        loginPage.login(usuarioValido, senhaValida);
        loginPage.validarLoginComSucesso();
    });

    it('Login com credenciais inválidas', () => {
        loginPage.acessarSite();
        loginPage.login(usuarioInvalido, senhaInvalida);
        loginPage.validarLoginCredenciaisInvalidas();
    });

    it('Login com campo usuário vazio', () => {
        loginPage.acessarSite();
        loginPage.login('', senhaValida);
        loginPage.validarLoginCamposVazios();
    });

    it('Login com campo senha vazio', () => {
        loginPage.acessarSite();
        loginPage.login(usuarioValido, '');
        loginPage.validarLoginCamposVazios();
    });

});
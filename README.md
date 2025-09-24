# Automação de Testes - OrangeHRM (Login)

Este repositório contém a automação da página de login do sistema OrangeHRM ([https://opensource-demo.orangehrmlive.com/](https://opensource-demo.orangehrmlive.com/)) utilizando Cypress. O projeto segue boas práticas de automação, como o uso de Page Objects e utils, e está integrado ao GitHub Actions (CI/CD) para garantir qualidade contínua.

Funcionalidades Automatizadas:

* Acesso à página de login do OrangeHRM.
* Login com credenciais válidas.
* Validação de mensagens de erro com credenciais inválidas.
* Verificação de campos obrigatórios (usuário, senha, botão de login).
* Organização com Page Objects para melhor manutenção.
* Métodos utilitários centralizados em utils/metodos.js.

---

## Tecnologias Utilizadas:

* Cypress - Framework de testes E2E.
* Node.js - Ambiente de execução.
* GitHub Actions - Integração e entrega contínua (CI/CD).

Estrutura do Projeto:
cypress
├── e2e
│   └── login.cy.js        # Cenários de teste do login
├── pages
│   └── loginPage.js       # Page Object da tela de login
├── utils
│   └── metodos.js         # Métodos auxiliares reutilizáveis
├── fixtures               # Massa de dados (opcional)
└── support                # Comandos customizados (opcional)
.github
└── workflows
└── ci.yml             # Pipeline de CI/CD
cypress.config.js          # Configuração do Cypress
package.json
README.md

---

## Como Executar Localmente:

Pré-requisitos:

* Node.js >= 16
* npm ou yarn instalado

---

## Instalação:

git clone [https://github.com/seu-usuario/orangehrm-cypress.git](https://github.com/seu-usuario/orangehrm-cypress.git)
cd orangehrm-cypress
npm install

---

## Rodando os testes:

Modo interativo:
npx cypress open
Modo headless (para CI/CD):
npx cypress run

---

# Integração Contínua (CI/CD):

O projeto possui pipeline configurado com GitHub Actions. A cada push ou pull request na branch main, os testes são executados automaticamente. O arquivo de workflow está em .github/workflows/ci.yml. Exemplo básico:

name: Cypress Tests
on:
push:
branches: \[ "main" ]
pull\_request:
branches: \[ "main" ]
jobs:
cypress-run:
runs-on: ubuntu-latest
steps:
\- name: Checkout repository
uses: actions/checkout\@v3
\- name: Setup Node.js
uses: actions/setup-node\@v3
with:
node-version: 18
\- name: Install dependencies
run: npm install
\- name: Run Cypress tests
run: npx cypress run

---

## Relatórios:

* Relatórios podem ser gerados usando Mochawesome.
* Também é possível integrar com o Cypress Dashboard (opcional) para visualização completa das execuções.

---

## Contribuição:

1. Faça um fork do repositório.
2. Crie uma branch (git checkout -b minha-feature).
3. Commit suas alterações (git commit -m 'Minha nova feature').
4. Push para a branch (git push origin minha-feature).
5. Abra um Pull Request.

---

### Autor:
Desenvolvido por Marcosdiono. Se você achar útil, considere dar uma estrela no repositório.

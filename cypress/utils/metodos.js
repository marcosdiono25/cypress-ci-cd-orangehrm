class Metodos {
    /**
     * Preencher um campo com espera explícita (aceita valores vazios)
     * @param {Function} elemento - função que retorna o elemento Cypress
     * @param {string} valor - valor a digitar (pode ser vazio)
     */
    preencher(elemento, valor) {
        elemento()
            .should('be.visible')
            .clear();

        if (valor && valor.length > 0) {
            elemento().type(valor);
        }
    }

    /**
     * Clicar em um elemento com espera explícita
     * @param {Function} elemento - função que retorna o elemento Cypress
     */
    clicar(elemento) {
        elemento()
            .should('be.visible')
            .click();
    }

    /**
     * Validar que um elemento ou texto esteja visível
     * @param {Function} elemento - função que retorna o elemento Cypress
     * @param {string} [texto] - opcional, texto a ser validado
     */
    validarPresenca(elemento, texto = null) {
        elemento().should('be.visible');
        if (texto) {
            elemento().should('contain.text', texto);
        }
    }

    /**
     * Validar que um elemento ou texto NÃO esteja presente
     * @param {Function} elemento - função que retorna o elemento Cypress
     * @param {string} [texto] - opcional, texto a ser validado
     */
    validarAusencia(elemento, texto = null) {
        if (texto) {
            elemento().should('not.contain.text', texto);
        } else {
            elemento().should('not.exist');
        }
    }
}

export default new Metodos();

import { isLowerCase } from "./lower-case.validator";

describe("A Função isLowerCase", () => {
    it("Deve Confirmar quando recebemos um texto em caixa baixa", () => {
        const nome = 'tales';
        const resultado = isLowerCase(nome);
        expect(resultado).toBeTruthy();
    });

    it("Deve Confirmar quando não recebemos um texto em caixa baixa", () => {
        const nome = 'Tales';
        const resultado = isLowerCase(nome);
        expect(resultado).toBeFalsy();
    })
})
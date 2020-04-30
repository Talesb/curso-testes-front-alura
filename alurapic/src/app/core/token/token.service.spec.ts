import { TokenService } from "./token.service";

describe('O serviço TokenService', () => {

    let token;
    let tokenService;

    it('Deve ser instanciado', () => {
        const tokenService = new TokenService();
        expect(tokenService).toBeTruthy();
    });


    it('Deve guardar um token', () => {
        tokenService.setToken(token);
        expect(tokenService.getToken()).toBe('testetoken');
        expect(tokenService.hasToken()).toBeTruthy();
    });


    it('Deve remover um token', () => {
        tokenService.setToken(token);
        tokenService.removeToken();
        expect(tokenService.hasToken()).toBeFalsy();
        expect(tokenService.getToken()).toBeFalsy();
    });


    afterEach(() => {
        localStorage.clear();
    })

    beforeEach(() => {
        token = 'testetoken';
        tokenService = new TokenService();
    })


});
import { TokenService } from "./token.service";

describe('O serviço TokenService', () => {

    it('Deve ser instanciado', () => {
        const tokenService = new TokenService();
        expect(tokenService).toBeTruthy();
    });


    it('Deve guardar um token', () => {
        const token = 'testetoken'
        const tokenService = new TokenService();
        tokenService.setToken(token);
        expect(tokenService.getToken()).toBe('testetoken');
        expect(tokenService.hasToken()).toBeTruthy(); 
    });


});
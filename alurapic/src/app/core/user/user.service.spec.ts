import { UserService } from "./user.service"
import { TokenService } from "../token/token.service";

describe('O Serviço UserService', () => {

    let service: UserService;
    let token: string;

    beforeEach(() => {

        const tokenService = new TokenService();
        service = new UserService(tokenService);
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTU4ODQ0NTA2MCwiZXhwIjoxNTg4NTMxNDYwfQ.Wz2chE-e2q1TmeQ9TCdyM2m4eBSit2bBV9RHo5twW8c'

    });

    it('Deve ser Instanciado', () => {
        expect(service).toBeTruthy();
    });

    it('Deve através de um token, recuperar informações do usuário', () => {

        service.setToken(token);
        expect(service.isLogged()).toBeTruthy();
        expect(service.getUserName()).toBe('flavio');
    });




})
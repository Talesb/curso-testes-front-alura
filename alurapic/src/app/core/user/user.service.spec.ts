import { UserService } from "./user.service"
import { TokenService } from "../token/token.service";
import { TestBed } from "@angular/core/testing";

describe('O Serviço UserService', () => {

    let service: UserService;
    let token: string;

    beforeEach(() => {


        TestBed.configureTestingModule({
            providers: [UserService]
        });

        service = TestBed.get(UserService);
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTU4ODQ0NTA2MCwiZXhwIjoxNTg4NTMxNDYwfQ.Wz2chE-e2q1TmeQ9TCdyM2m4eBSit2bBV9RHo5twW8c'

    });

    it('Deve ser Instanciado', () => {
        expect(service).toBeTruthy();
    });

    it('Deve através de um token, recuperar informações do usuário', () => {

        service.setToken(token);
        expect(service.isLogged()).toBeTruthy();
        expect(service.getUserName()).toBe('flavio');

        service.getUser().subscribe(
            user => {
                expect(user.name).toBe('flavio');
            });
    });

    it('Deve limpar as informações no local', () => {

        service.setToken(token);
        service.logout();
        expect(service.isLogged()).toBeFalsy();
        expect(service.getUserName()).toBeFalsy();
    });




})
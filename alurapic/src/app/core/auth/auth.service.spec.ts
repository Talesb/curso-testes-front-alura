import { AuthService } from "./auth.service"
import { TestBed } from "@angular/core/testing"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { UserService } from "../user/user.service";


describe('O serviço de AuthService', () => {

    let service: AuthService;
    let httpMock: HttpTestingController;
    let userService:UserService;


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthService]
        });

        service = TestBed.get(AuthService);
        httpMock = TestBed.get(HttpTestingController);
        userService = TestBed.get(UserService);
    })

    it('Deve ser instanciado', () => {
        expect(service).toBeTruthy();
    });


    it('Deve autenticar o usuario', () => {
        const fakeBody = {
            id: 1,
            nome: 'alvaro',
            email: 'alvaro@alura.com'
        };

        spyOn(userService,"setToken").and.returnValue(null);

        service.authenticate('alvaro', '1234').subscribe(response => {
            expect(response.body).toEqual(fakeBody);
            expect(response.headers.get('x-acess-token')).toBe('tokenTest');
        });


        const request = httpMock.expectOne((req) => {
            return req.method === 'POST';
        });

        request.flush(fakeBody, {
            headers: {
                'x-acess-token': 'tokenTest'
            }
        })
    });





})
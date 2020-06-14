import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
describe('LoginComponent', () => {
    let fixture: LoginComponent;
    let mockAuthService: AuthService;
    let mockRouter: Router;

    beforeEach(() => {
        fixture = new LoginComponent(mockAuthService, mockRouter);
    });

    describe('Setup component', () => {
        describe('ngOnInit', () => {
            it('should call initForm', () => {
                const initFormSpy = jest.spyOn(fixture, 'initForm');

                fixture.ngOnInit();

                expect(initFormSpy).toHaveBeenCalled();
            });
        });
    })
});
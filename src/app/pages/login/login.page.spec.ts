import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
        FormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to home page after login', () => {
    spyOn(router, 'navigate');
    component.login();

    expect(router.navigate).toHaveBeenCalledOnceWith(['home']);
  });

  it('should go to home page after register', () => {
    spyOn(router, 'navigate');
    component.register();

    expect(router.navigate).toHaveBeenCalledOnceWith(['register']);
  });
});

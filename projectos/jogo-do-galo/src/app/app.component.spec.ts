import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { JogoDoGaloModule } from './jogo-do-galo/jogo-do-galo.module';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        JogoDoGaloModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});

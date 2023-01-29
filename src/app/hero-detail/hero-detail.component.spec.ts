import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';

import { MockService, MockModule, MockDirective } from 'ng-mocks';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';
import { Hero } from '../Daten/hero';
import { RouterTestingModule } from '@angular/router/testing';
import { NgModel } from '@angular/forms';


describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let locationMock = MockService(Location);
  let activatedRouteMock = MockService(ActivatedRoute);
  let heroServiceMock = MockService(HeroService);
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async () => {
    jest.resetAllMocks();
    heroServiceMock.getHero = jest.fn().mockReturnValue(of({ id: 1, name: 'test' } as Hero));

    await TestBed.configureTestingModule({
      declarations: [HeroDetailComponent, MockDirective(NgModel)],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: Location, useValue: locationMock },
        { provide: HeroService, useValue: heroServiceMock}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test getHero', fakeAsync(() => {
    // given: test inits
    
    // when: execute test class method
    component.getHero();
    tick();

    // then
    expect(heroServiceMock.getHero).toHaveBeenCalled();
    expect(component.hero).toEqual({ "id": 1, "name": "test" });
  }));
});

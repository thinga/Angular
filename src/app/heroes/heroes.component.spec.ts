import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockService } from 'ng-mocks';
import { of } from 'rxjs';
import { Hero } from '../Daten/hero';
import { HeroService } from '../hero.service';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let heroServiceMock = MockService(HeroService);

  beforeEach(async () => {
    jest.resetAllMocks();
    heroServiceMock.getHeroes = jest.fn().mockReturnValue(of([{ id: 1, name: 'test' }] as Hero[]));
    await TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: HeroService, useValue: heroServiceMock}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('schould test getHeroes', fakeAsync(() => {
    //given

    //when
    component.getHeroes();
    tick();

    //then
    expect(heroServiceMock.getHeroes).toHaveBeenCalled();
    expect(component.heroes).toEqual([{ "id": 1, "name": "test" }]);
  }
  ))
});

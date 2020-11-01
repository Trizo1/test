import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnimalComponent } from './card-animal.component';

describe('CardAnimalComponent', () => {
  let component: CardAnimalComponent;
  let fixture: ComponentFixture<CardAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

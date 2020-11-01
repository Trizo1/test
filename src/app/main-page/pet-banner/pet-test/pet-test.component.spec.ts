import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetTestComponent } from './pet-test.component';

describe('PetTestComponent', () => {
  let component: PetTestComponent;
  let fixture: ComponentFixture<PetTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

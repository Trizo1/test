import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalManageComponent } from './animal-manage.component';

describe('AnimalManageComponent', () => {
  let component: AnimalManageComponent;
  let fixture: ComponentFixture<AnimalManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

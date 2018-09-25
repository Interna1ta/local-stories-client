import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserCardComponent } from './single-user-card.component';

describe('SingleUserCardComponent', () => {
  let component: SingleUserCardComponent;
  let fixture: ComponentFixture<SingleUserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SingleUserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserDescriptionComponent } from './single-user-description.component';

describe('SingleUserDescriptionComponent', () => {
  let component: SingleUserDescriptionComponent;
  let fixture: ComponentFixture<SingleUserDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleUserDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleUserDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

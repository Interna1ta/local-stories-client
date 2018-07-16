import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFollowersPageComponent } from './add-followers-page.component';

describe('AddFollowersPageComponent', () => {
  let component: AddFollowersPageComponent;
  let fixture: ComponentFixture<AddFollowersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFollowersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFollowersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

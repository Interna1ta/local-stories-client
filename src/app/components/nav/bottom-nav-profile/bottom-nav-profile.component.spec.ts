import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavProfileComponent } from './bottom-nav-profile.component';

describe('BottomNavProfileComponent', () => {
  let component: BottomNavProfileComponent;
  let fixture: ComponentFixture<BottomNavProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomNavProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

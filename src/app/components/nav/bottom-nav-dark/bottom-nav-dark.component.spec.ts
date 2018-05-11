import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavDarkComponent } from './bottom-nav-dark.component';

describe('BottomNavDarkComponent', () => {
  let component: BottomNavDarkComponent;
  let fixture: ComponentFixture<BottomNavDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomNavDarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavCreateComponent } from './bottom-nav-create.component';

describe('BottomNavCreateComponent', () => {
  let component: BottomNavCreateComponent;
  let fixture: ComponentFixture<BottomNavCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomNavCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

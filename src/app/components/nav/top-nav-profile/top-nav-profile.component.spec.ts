import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavProfileComponent } from './top-nav-profile.component';

describe('TopNavProfileComponent', () => {
  let component: TopNavProfileComponent;
  let fixture: ComponentFixture<TopNavProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

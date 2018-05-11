import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavCreateComponent } from './top-nav-create.component';

describe('TopNavCreateComponent', () => {
  let component: TopNavCreateComponent;
  let fixture: ComponentFixture<TopNavCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

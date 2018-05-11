import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavFeedComponent } from './top-nav-feed.component';

describe('TopNavFeedComponent', () => {
  let component: TopNavFeedComponent;
  let fixture: ComponentFixture<TopNavFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStoryPageComponent } from './single-story-page.component';

describe('SingleStoryPageComponent', () => {
  let component: SingleStoryPageComponent;
  let fixture: ComponentFixture<SingleStoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleStoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleStoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

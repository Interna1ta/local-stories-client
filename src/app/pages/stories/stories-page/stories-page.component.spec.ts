import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesPageComponent } from './stories-page.component';

describe('StoriesPageComponent', () => {
  let component: StoriesPageComponent;
  let fixture: ComponentFixture<StoriesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArticlePageComponent } from './single-article-page.component';

describe('SingleArticlePageComponent', () => {
  let component: SingleArticlePageComponent;
  let fixture: ComponentFixture<SingleArticlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleArticlePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

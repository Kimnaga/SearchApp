import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiSearchService } from './wiki-search.service';

describe('WikiSearchComponent', () => {
  let component: WikiSearchComponent;
  let fixture: ComponentFixture<WikiSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

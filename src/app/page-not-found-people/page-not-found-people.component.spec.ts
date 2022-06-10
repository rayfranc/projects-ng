import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundPeopleComponent } from './page-not-found-people.component';

describe('PageNotFoundPeopleComponent', () => {
  let component: PageNotFoundPeopleComponent;
  let fixture: ComponentFixture<PageNotFoundPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

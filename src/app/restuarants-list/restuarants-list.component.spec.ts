import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestuarantsListComponent } from './restuarants-list.component';

describe('RestuarantsListComponent', () => {
  let component: RestuarantsListComponent;
  let fixture: ComponentFixture<RestuarantsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestuarantsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestuarantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

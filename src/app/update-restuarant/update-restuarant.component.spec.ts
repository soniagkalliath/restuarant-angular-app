import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestuarantComponent } from './update-restuarant.component';

describe('UpdateRestuarantComponent', () => {
  let component: UpdateRestuarantComponent;
  let fixture: ComponentFixture<UpdateRestuarantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRestuarantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRestuarantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

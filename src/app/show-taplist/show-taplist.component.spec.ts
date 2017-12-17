import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTaplistComponent } from './show-taplist.component';

describe('ShowTaplistComponent', () => {
  let component: ShowTaplistComponent;
  let fixture: ComponentFixture<ShowTaplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTaplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTaplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

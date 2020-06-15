import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarComponent } from './star.component';

fdescribe('StarComponent', () => {
  let component: StarComponent;
  let fixture: ComponentFixture<StarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('rating should be instantiated to 0', () => {
    expect(component.rating).toEqual(1);
  });
});

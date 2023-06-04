import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheComponent } from './the.component';

describe('TheComponent', () => {
  let component: TheComponent;
  let fixture: ComponentFixture<TheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheComponent]
    });
    fixture = TestBed.createComponent(TheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

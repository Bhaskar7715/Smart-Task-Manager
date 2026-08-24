import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smart } from './smart';

describe('Smart', () => {
  let component: Smart;
  let fixture: ComponentFixture<Smart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Smart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Smart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

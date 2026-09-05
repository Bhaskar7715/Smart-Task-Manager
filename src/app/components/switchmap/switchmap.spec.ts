import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switchmap } from './switchmap';

describe('Switchmap', () => {
  let component: Switchmap;
  let fixture: ComponentFixture<Switchmap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Switchmap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Switchmap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

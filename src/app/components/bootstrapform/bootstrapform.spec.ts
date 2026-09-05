import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bootstrapform } from './bootstrapform';

describe('Bootstrapform', () => {
  let component: Bootstrapform;
  let fixture: ComponentFixture<Bootstrapform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bootstrapform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bootstrapform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

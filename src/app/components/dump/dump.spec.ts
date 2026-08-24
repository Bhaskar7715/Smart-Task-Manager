import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dump } from './dump';

describe('Dump', () => {
  let component: Dump;
  let fixture: ComponentFixture<Dump>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dump]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dump);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

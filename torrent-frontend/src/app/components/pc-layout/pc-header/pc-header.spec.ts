import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcHeader } from './pc-header';

describe('PcHeader', () => {
  let component: PcHeader;
  let fixture: ComponentFixture<PcHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

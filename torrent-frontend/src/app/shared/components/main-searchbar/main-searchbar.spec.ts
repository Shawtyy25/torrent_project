import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSearchbar } from './main-searchbar';

describe('MainSearchbar', () => {
  let component: MainSearchbar;
  let fixture: ComponentFixture<MainSearchbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSearchbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSearchbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

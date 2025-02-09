import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleH1Component } from './title-h1.component';

describe('TitleH1Component', () => {
  let component: TitleH1Component;
  let fixture: ComponentFixture<TitleH1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleH1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

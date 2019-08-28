import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RenderedDataCardComponent} from './raw-data-card.component';

describe('RenderedDataCardComponent', () => {
  let component: RenderedDataCardComponent;
  let fixture: ComponentFixture<RenderedDataCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RenderedDataCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderedDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

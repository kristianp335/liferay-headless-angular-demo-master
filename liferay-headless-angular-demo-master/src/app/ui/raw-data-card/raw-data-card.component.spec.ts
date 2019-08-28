import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RawDataCardComponent} from './raw-data-card.component';

describe('RawDataCardComponent', () => {
  let component: RawDataCardComponent;
  let fixture: ComponentFixture<RawDataCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RawDataCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

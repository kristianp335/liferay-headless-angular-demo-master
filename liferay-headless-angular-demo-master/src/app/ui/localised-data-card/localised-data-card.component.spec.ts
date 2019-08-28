import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LocalisedDataCardComponent} from './raw-data-card.component';

describe('LocalisedDataCardComponent', () => {
  let component: LocalisedDataCardComponent;
  let fixture: ComponentFixture<LocalisedDataCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LocalisedDataCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalisedDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

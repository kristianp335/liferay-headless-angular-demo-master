import {async, ComponentFixture, TestBed} from '@angular/core/testing';
from
import {LocalisedDataComponent} from './raw-data.component';

describe('LocalisedDataComponent', () => {
  let component: LocalisedDataComponent;
  let fixture: ComponentFixture<LocalisedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LocalisedDataComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalisedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

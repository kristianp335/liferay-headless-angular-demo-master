import {async, ComponentFixture, TestBed} from '@angular/core/testing';
from
import {RenderedDataComponent} from './raw-data.component';

describe('RenderedDataComponent', () => {
  let component: RenderedDataComponent;
  let fixture: ComponentFixture<RenderedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RenderedDataComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

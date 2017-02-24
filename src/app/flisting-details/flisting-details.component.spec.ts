import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlistingDetailsComponent } from './flisting-details.component';

describe('FlistingDetailsComponent', () => {
  let component: FlistingDetailsComponent;
  let fixture: ComponentFixture<FlistingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlistingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlistingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

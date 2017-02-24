import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlistingFormComponent } from './flisting-form.component';

describe('FlistingFormComponent', () => {
  let component: FlistingFormComponent;
  let fixture: ComponentFixture<FlistingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlistingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlistingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

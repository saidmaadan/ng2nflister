import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlistingsComponent } from './flistings.component';

describe('FlistingsComponent', () => {
  let component: FlistingsComponent;
  let fixture: ComponentFixture<FlistingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlistingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlistingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

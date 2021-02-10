import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksMethodComponent } from './hooks-method.component';

describe('HooksMethodComponent', () => {
  let component: HooksMethodComponent;
  let fixture: ComponentFixture<HooksMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HooksMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HooksMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

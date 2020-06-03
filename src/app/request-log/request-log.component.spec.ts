import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLogComponent } from './request-log.component';

describe('RequestLogComponent', () => {
  let component: RequestLogComponent;
  let fixture: ComponentFixture<RequestLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

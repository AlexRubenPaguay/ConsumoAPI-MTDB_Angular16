import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMtdbComponent } from './api-mtdb.component';

describe('ApiMtdbComponent', () => {
  let component: ApiMtdbComponent;
  let fixture: ComponentFixture<ApiMtdbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiMtdbComponent]
    });
    fixture = TestBed.createComponent(ApiMtdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

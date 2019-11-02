import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeMatrixComponent } from './size-matrix.component';

describe('SizeMatrixComponent', () => {
  let component: SizeMatrixComponent;
  let fixture: ComponentFixture<SizeMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

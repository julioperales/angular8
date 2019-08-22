import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComplexComponent } from './table-complex.component';

describe('TableComplexComponent', () => {
  let component: TableComplexComponent;
  let fixture: ComponentFixture<TableComplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

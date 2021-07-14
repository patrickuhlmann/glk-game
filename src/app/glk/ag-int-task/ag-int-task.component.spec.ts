import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgIntTaskComponent } from './ag-int-task.component';

describe('AgIntTaskComponent', () => {
  let component: AgIntTaskComponent;
  let fixture: ComponentFixture<AgIntTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgIntTaskComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgIntTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

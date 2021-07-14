import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeviSchweizTaskComponent } from './cevi-schweiz-task.component';

describe('CeviSchweizTaskComponent', () => {
  let component: CeviSchweizTaskComponent;
  let fixture: ComponentFixture<CeviSchweizTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CeviSchweizTaskComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeviSchweizTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

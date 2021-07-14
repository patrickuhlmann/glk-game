import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionenTaskComponent } from './regionen-task.component';

describe('RegionenTaskComponent', () => {
  let component: RegionenTaskComponent;
  let fixture: ComponentFixture<RegionenTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegionenTaskComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionenTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

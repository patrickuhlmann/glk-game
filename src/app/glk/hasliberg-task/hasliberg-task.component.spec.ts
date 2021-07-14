import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaslibergTaskComponent } from './hasliberg-task.component';

describe('HaslibergTaskComponent', () => {
  let component: HaslibergTaskComponent;
  let fixture: ComponentFixture<HaslibergTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HaslibergTaskComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaslibergTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

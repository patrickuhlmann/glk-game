import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { QuizComponent } from '../quiz/quiz.component';

import { CeviSchweizTaskComponent } from './cevi-schweiz-task.component';

describe('CeviSchweizTaskComponent', () => {
  let component: CeviSchweizTaskComponent;
  let fixture: ComponentFixture<CeviSchweizTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CeviSchweizTaskComponent, QuizComponent],
      imports: [
        MatSnackBarModule,
        MatCardModule,
        MatCheckboxModule,
        FormsModule,
      ],
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

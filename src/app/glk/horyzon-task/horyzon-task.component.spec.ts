import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { QuizComponent } from '../quiz/quiz.component';

import { HoryzonTaskComponent } from './horyzon-task.component';

describe('HoryzonTaskComponent', () => {
  let component: HoryzonTaskComponent;
  let fixture: ComponentFixture<HoryzonTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoryzonTaskComponent, QuizComponent],
      imports: [
        MatSnackBarModule,
        MatCardModule,
        MatCheckboxModule,
        FormsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoryzonTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

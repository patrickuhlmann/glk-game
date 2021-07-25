import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { QuizComponent } from '../quiz/quiz.component';

import { YmcaTaskComponent } from './ymca-task.component';

describe('YmcaTaskComponent', () => {
  let component: YmcaTaskComponent;
  let fixture: ComponentFixture<YmcaTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YmcaTaskComponent, QuizComponent],
      imports: [
        MatSnackBarModule,
        MatCardModule,
        MatCheckboxModule,
        FormsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YmcaTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

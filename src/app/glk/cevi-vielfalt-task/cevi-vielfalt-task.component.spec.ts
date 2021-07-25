import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { QuizComponent } from '../quiz/quiz.component';

import { CeviVielfaltTaskComponent } from './cevi-vielfalt-task.component';

describe('CeviVielfaltTaskComponent', () => {
  let component: CeviVielfaltTaskComponent;
  let fixture: ComponentFixture<CeviVielfaltTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CeviVielfaltTaskComponent, QuizComponent],
      imports: [
        MatSnackBarModule,
        MatCardModule,
        MatCheckboxModule,
        FormsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeviVielfaltTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

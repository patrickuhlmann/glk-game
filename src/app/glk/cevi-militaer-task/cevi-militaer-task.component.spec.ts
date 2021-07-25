import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { QuizComponent } from '../quiz/quiz.component';

import { CeviMilitaerTaskComponent } from './cevi-militaer-task.component';

describe('CeviMilitaerTaskComponent', () => {
  let component: CeviMilitaerTaskComponent;
  let fixture: ComponentFixture<CeviMilitaerTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CeviMilitaerTaskComponent, QuizComponent],
      imports: [
        MatSnackBarModule,
        MatCardModule,
        MatCheckboxModule,
        FormsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeviMilitaerTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

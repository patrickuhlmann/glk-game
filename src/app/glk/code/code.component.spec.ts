import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { CodeComponent } from './code.component';

describe('CodeComponent', () => {
  let component: CodeComponent;
  let fixture: ComponentFixture<CodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeComponent],
      imports: [
        MatSnackBarModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

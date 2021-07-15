import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

import { CheatComponent } from './cheat.component';

describe('CheatComponent', () => {
  let component: CheatComponent;
  let fixture: ComponentFixture<CheatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheatComponent],
      imports: [MatSnackBarModule, MatTableModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

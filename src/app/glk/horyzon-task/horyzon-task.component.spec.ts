import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoryzonTaskComponent } from './horyzon-task.component';

describe('HoryzonTaskComponent', () => {
  let component: HoryzonTaskComponent;
  let fixture: ComponentFixture<HoryzonTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoryzonTaskComponent],
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

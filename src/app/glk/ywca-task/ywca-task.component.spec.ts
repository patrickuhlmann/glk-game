import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YwcaTaskComponent } from './ywca-task.component';

describe('YwcaTaskComponent', () => {
  let component: YwcaTaskComponent;
  let fixture: ComponentFixture<YwcaTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YwcaTaskComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YwcaTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

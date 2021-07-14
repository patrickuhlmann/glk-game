import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YmcaTaskComponent } from './ymca-task.component';

describe('YmcaTaskComponent', () => {
  let component: YmcaTaskComponent;
  let fixture: ComponentFixture<YmcaTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YmcaTaskComponent],
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

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeviMilitaerTaskComponent } from './cevi-militaer-task.component';

describe('CeviMilitaerTaskComponent', () => {
  let component: CeviMilitaerTaskComponent;
  let fixture: ComponentFixture<CeviMilitaerTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CeviMilitaerTaskComponent],
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

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeviAlpinTaskComponent } from './cevi-alpin-task.component';

describe('CeviAlpinTaskComponent', () => {
  let component: CeviAlpinTaskComponent;
  let fixture: ComponentFixture<CeviAlpinTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CeviAlpinTaskComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeviAlpinTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

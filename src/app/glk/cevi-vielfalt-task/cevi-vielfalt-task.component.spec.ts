import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeviVielfaltTaskComponent } from './cevi-vielfalt-task.component';

describe('CeviVielfaltTaskComponent', () => {
  let component: CeviVielfaltTaskComponent;
  let fixture: ComponentFixture<CeviVielfaltTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CeviVielfaltTaskComponent],
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

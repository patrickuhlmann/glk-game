import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsgUnifyTaskComponent } from './esg-unify-task.component';

describe('EsgUnifyTaskComponent', () => {
  let component: EsgUnifyTaskComponent;
  let fixture: ComponentFixture<EsgUnifyTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsgUnifyTaskComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsgUnifyTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

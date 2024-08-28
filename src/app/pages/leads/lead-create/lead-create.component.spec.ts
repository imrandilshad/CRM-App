import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadCreateComponent } from './lead-create.component';

describe('LeadCreateComponent', () => {
  let component: LeadCreateComponent;
  let fixture: ComponentFixture<LeadCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarybuttonComponent } from './secondarybutton.component';

describe('SecondarybuttonComponent', () => {
  let component: SecondarybuttonComponent;
  let fixture: ComponentFixture<SecondarybuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondarybuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondarybuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

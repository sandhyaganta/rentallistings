import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertymanagersComponent } from './propertymanagers.component';

describe('PropertymanagersComponent', () => {
  let component: PropertymanagersComponent;
  let fixture: ComponentFixture<PropertymanagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertymanagersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertymanagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

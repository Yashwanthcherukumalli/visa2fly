import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamcompComponent } from './teamcomp.component';

describe('TeamcompComponent', () => {
  let component: TeamcompComponent;
  let fixture: ComponentFixture<TeamcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamcompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

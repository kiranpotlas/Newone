import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldageHomesComponent } from './oldage-homes.component';

describe('OldageHomesComponent', () => {
  let component: OldageHomesComponent;
  let fixture: ComponentFixture<OldageHomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldageHomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldageHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

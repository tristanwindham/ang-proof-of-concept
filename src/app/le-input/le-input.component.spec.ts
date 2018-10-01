import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeInputComponent } from './le-input.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxInputGroupModule } from 'igniteui-angular';

describe('LeInputComponent', () => {
  let component: LeInputComponent;
  let fixture: ComponentFixture<LeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeInputComponent],
      imports: [IgxInputGroupModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

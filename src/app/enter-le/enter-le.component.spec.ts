import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterLeComponent } from './enter-le.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxInputGroupModule } from 'igniteui-angular';

describe('EnterLeComponent', () => {
  let component: EnterLeComponent;
  let fixture: ComponentFixture<EnterLeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EnterLeComponent],
      imports: [IgxInputGroupModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterLeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

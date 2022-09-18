import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharlamosComponent } from './charlamos.component';

describe('CharlamosComponent', () => {
  let component: CharlamosComponent;
  let fixture: ComponentFixture<CharlamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharlamosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharlamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

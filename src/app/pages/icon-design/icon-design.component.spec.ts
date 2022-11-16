import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDesignComponent } from './icon-design.component';

describe('IconDesignComponent', () => {
  let component: IconDesignComponent;
  let fixture: ComponentFixture<IconDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

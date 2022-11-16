import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefabsComponent } from './prefabs.component';

describe('PrefabsComponent', () => {
  let component: PrefabsComponent;
  let fixture: ComponentFixture<PrefabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

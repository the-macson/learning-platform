import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidLayerComponent } from './mid-layer.component';

describe('MidLayerComponent', () => {
  let component: MidLayerComponent;
  let fixture: ComponentFixture<MidLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidLayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

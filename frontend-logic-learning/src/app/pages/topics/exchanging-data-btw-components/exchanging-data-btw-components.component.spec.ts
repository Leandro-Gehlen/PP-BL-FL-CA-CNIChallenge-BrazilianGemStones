import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangingDataBtwComponentsComponent } from './exchanging-data-btw-components.component';

describe('ExchangingDataBtwComponentsComponent', () => {
  let component: ExchangingDataBtwComponentsComponent;
  let fixture: ComponentFixture<ExchangingDataBtwComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangingDataBtwComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangingDataBtwComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

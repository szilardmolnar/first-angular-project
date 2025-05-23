import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InneritemComponent } from './inneritem.component';

describe('InneritemComponent', () => {
  let component: InneritemComponent;
  let fixture: ComponentFixture<InneritemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InneritemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InneritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

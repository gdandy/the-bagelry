import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressComponent } from './address.component';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h3 tag', async(() => {
    fixture = TestBed.createComponent(AddressComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Hours and Location');
  }));
});

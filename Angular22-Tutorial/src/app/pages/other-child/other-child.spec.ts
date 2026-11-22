import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtherChild } from './other-child';

describe('OtherChild', () => {
  let component: OtherChild;
  let fixture: ComponentFixture<OtherChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherChild],
    }).compileComponents();

    fixture = TestBed.createComponent(OtherChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

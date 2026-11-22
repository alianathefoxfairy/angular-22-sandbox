import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtherParent } from './other-parent';

describe('OtherParent', () => {
  let component: OtherParent;
  let fixture: ComponentFixture<OtherParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherParent],
    }).compileComponents();

    fixture = TestBed.createComponent(OtherParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

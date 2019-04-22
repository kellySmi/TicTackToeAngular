import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SquareComponent } from './square.component';

describe('SquareComponent', () => {
  let squareComponent: SquareComponent;
  let fixture: ComponentFixture<SquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareComponent);
    squareComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(squareComponent).toBeTruthy();
  });
  it('should have a location ', () => {
    expect(squareComponent.location).toBeDefined;
  });
  it('should have a square value ', () => {
    expect(squareComponent.squareValue).toBeDefined;
  });
  it('should have a selectSquare function', () => {
    expect(squareComponent.selectSquare).toBeDefined;
  });
});

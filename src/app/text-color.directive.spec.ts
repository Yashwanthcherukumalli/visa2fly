import { TestBed } from '@angular/core/testing';
import { ElementRef, Renderer2 } from '@angular/core';
import { TextColorDirective } from './text-color.directive';

describe('TextColorDirective', () => {
  let directive: TextColorDirective;
  let elementRef: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    // Mock ElementRef and Renderer2
    elementRef = {} as ElementRef;
    renderer = {} as Renderer2;

    // Configure the testing module
    TestBed.configureTestingModule({
      providers: [
        TextColorDirective,
        { provide: ElementRef, useValue: elementRef },
        { provide: Renderer2, useValue: renderer }
      ]
    });

    directive = TestBed.inject(TextColorDirective);
  });

  it('should create', () => {
    expect(directive).toBeTruthy();
  });
});

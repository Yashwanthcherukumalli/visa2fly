import { TestBed } from '@angular/core/testing';
import { ElementRef, Renderer2 } from '@angular/core';
import { BgColorDirective } from './bg-color.directive';

describe('BgColorDirective', () => {
  let directive: BgColorDirective;
  let elementRef: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    // Mock ElementRef and Renderer2
    elementRef = {} as ElementRef;
    renderer = {} as Renderer2;

    // Configure the testing module
    TestBed.configureTestingModule({
      providers: [
        BgColorDirective,
        { provide: ElementRef, useValue: elementRef },
        { provide: Renderer2, useValue: renderer }
      ]
    });

    directive = TestBed.inject(BgColorDirective);
  });

  it('should create', () => {
    expect(directive).toBeTruthy();
  });
});

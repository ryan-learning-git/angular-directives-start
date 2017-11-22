import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

    elementRef: ElementRef;
    renderer: Renderer2;

    constructor(elementRef: ElementRef, renderer: Renderer2) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }

    ngOnInit(): void {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#336699'); // could add flags such as important
    }

}

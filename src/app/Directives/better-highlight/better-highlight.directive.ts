import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

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

    @HostListener('mouseenter') mouseOver(eventData: Event){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#990000'); // could add flags such as important
    }

    @HostListener('mouseleave') mouseLeave(eventData: Event){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#009900'); // could add flags such as important
    }

}

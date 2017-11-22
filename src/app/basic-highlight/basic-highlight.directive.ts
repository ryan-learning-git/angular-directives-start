import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

    elementRef: ElementRef;

    constructor(elementRef: ElementRef){
        this.elementRef = elementRef;
    }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = '#009900';
    }



}
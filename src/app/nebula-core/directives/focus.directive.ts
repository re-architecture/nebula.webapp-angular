//https://coderanch.com/t/675897/languages/programmatically-manage-focus-Angular-app
import { Directive, Input, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[nebulaFocus]'
})
export class FocusDirective {

  //@Input('nebulaFocus') isFocused : boolean = true;

  constructor(private hostElement: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    //console.log('xxxx');
    //if(this.isFocused){
    this.renderer.invokeElementMethod(this.hostElement.nativeElement, 'focus');
    //}
  }

}

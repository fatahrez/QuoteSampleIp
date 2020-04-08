import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input("appHighlight") highLightColor:boolean;
  constructor(private elem:ElementRef){
  }
  @HostListener('change') ngOnChanges(){
    if(this.highLightColor){
       this.elem.nativeElement.style.backgroundColor='moccasin'
       this.elem.nativeElement.style.color='black';
    }
    else{
      this.elem.nativeElement.style.backgroundColor='wite';
      this.elem.nativeElement.style.color='black';
    }
  }
}

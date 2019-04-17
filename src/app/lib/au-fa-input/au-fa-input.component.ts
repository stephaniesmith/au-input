import { Component, OnInit, Input, ContentChild, AfterContentInit, HostBinding } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css']
})
export class AuFaInputComponent implements OnInit, AfterContentInit {

  @Input() icon: string;
  @ContentChild(InputRefDirective) input: HTMLInputElement;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    if (!this.input) {
      console.error('The au-fa-input needs an input inside its content')
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  get classes() {
    const cssClasses = {}

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true
    };

    return cssClasses;
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Input() addNewQuote: Function;
  @Output()addQuote = new EventEmitter <Quote>();

  newQuote = new Quote(1,'', '', '', 0, 0, new Date(), false);

  submitQuote() {
    this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit() {
  }

}

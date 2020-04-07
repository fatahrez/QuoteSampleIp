import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quote} from '../quote';
import {isBoolean} from 'util';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output()isDelete = new EventEmitter<boolean>()
  @Output()isVote = new EventEmitter<boolean>()

  constructor() { }

  deleteQuote(complete: boolean) {
    this.isDelete.emit(complete);
  }

  increaseVote(votes: boolean) {
    this.isVote.emit(votes);
  }

  ngOnInit() {
  }

}

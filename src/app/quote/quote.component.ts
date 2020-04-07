import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
import DateTimeFormat = Intl.DateTimeFormat;

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote('Martin Luther King Jr.', 'Abdulfatah', 'If you cant fly then run, if you cant run then walk, if you cant walk then crawl, but whatever you do, you have to keep moving forward.', 0, 0, new Date(2020, 4, 6)),
    new Quote('Oprah Winfrey', 'Abdulfatah', 'Where there is no struggle, there is no strength.', 0, 0, new Date(2020, 4, 6))
  ];

  toggleDetails(index) {
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }

  voteIncrease(isVote, index) {
    if (isVote) {
      this.quotes[index].upVote += 1;
    } else {
      this.quotes[index].downVote += 1;
    }
  }

  quoteDelete(isDelete, index) {
    if (isDelete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

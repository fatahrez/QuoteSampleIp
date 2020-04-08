import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
import DateTimeFormat = Intl.DateTimeFormat;

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [];

  constructor() { }

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

  addNewQuote(author: string, submitter: string, theQuote: string, date: Date) {
    const id = this.quotes.length
    const quote: Quote = new Quote(id+1, author, submitter, theQuote, 0, 0, new Date(Date.now()), false);
    this.quotes.push(quote);
    this.getHighestQuote(true)
  }

  get addNewQuoteFunc() {
    return this.addNewQuote.bind(this);
  }

  getHighestQuote(changed:boolean):void{
    let highest:any[]=[0,0]
    if(changed){
      for(let quote of this.quotes){
        if(quote.upVote > highest[1]){
          highest[1]=quote.upVote;
          highest[0]=quote;
        }
      }
    }
    this.highlightExcept(highest[0]);
  }
   highlightExcept(except:Quote){
      for(let quote of this.quotes){
        if(except.id!=quote.id){
          quote.highest=false;
       }
       else{
          except.highest=true;
       }
      }
   }

  ngOnInit() {
  }

}

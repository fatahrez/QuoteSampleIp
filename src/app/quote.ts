export class Quote {
  public showQuote: boolean;

  constructor(public id: number, public author: string, public submitter: string, public theQuote: string, public upVote: number, public downVote: number, public date: Date, public highest: boolean) {
    this.showQuote = false;
    this.upVote = 0;
    this.downVote = 0;
    this.highest = false;
  }
}

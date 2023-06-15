import {makeAutoObservable} from 'mobx';
import {Quote, QuotesService} from 'src/modules/quote';

export class QuotesStore {
  quotes: Quote[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getQuotes = async () => {
    const response = await QuotesService.getQuotes();

    if (!response) {
      return;
    }

    this.quotes = response;
  };
}

import {makeAutoObservable, runInAction} from 'mobx';
import {Quote, QuotesService} from 'src/modules/quote';

export class QuotesStore {
  quotes: Quote[] = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setQuotes(quotes: Quote[]) {
    this.quotes = quotes;
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  getQuotes = async () => {
    this.setIsLoading(true);
    const response = await QuotesService.getQuotes();

    if (!response) {
      return;
    }

    runInAction(() => {
      this.setIsLoading(false);
      this.setQuotes(response);
    });
  };
}

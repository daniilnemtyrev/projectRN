import {createContext, useContext} from 'react';
import {QuotesStore} from './quotes-store';

class RootStore {
  quotesStore;

  constructor() {
    this.quotesStore = new QuotesStore();
  }
}

export const rootStore = new RootStore();
const StoreContext = createContext(rootStore);

export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);

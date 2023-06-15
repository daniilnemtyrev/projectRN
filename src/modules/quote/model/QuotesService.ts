import axios from 'axios';
import {Quote, QuotesData} from './types';

export class QuotesService {
  static async getQuotes() {
    try {
      const {data} = await axios<QuotesData>('https://poloniex.com/public', {
        method: 'GET',
        params: {
          command: 'returnTicker',
        },
      });

      const quotes = Object.keys(data).map(key => ({
        id: data[key].id,
        title: key,
        last: data[key].last,
        highestBid: data[key].highestBid,
        percentChange: data[key].percentChange,
      })) as Quote[];

      return quotes;
    } catch (e) {
      console.log(e);
    }
  }
}

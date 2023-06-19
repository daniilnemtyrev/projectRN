export interface Quote {
  id: string;
  title: string;
  last: string;
  highestBid: string;
  percentChange: string;
}

export interface QuotesData {
  [key: string]: Omit<Quote, 'title'>;
}

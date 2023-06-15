import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useStore} from 'src/app/stores/root-store';

export const QuotesTable = observer(() => {
  const {quotesStore} = useStore();
  const {quotes, getQuotes} = quotesStore;

  useEffect(() => {
    getQuotes();
  }, [getQuotes]);

  console.log(quotes);

  return (
    <View>{quotes && quotes.map(quote => <Text>{quote.title}</Text>)}</View>
  );
});

import {observer} from 'mobx-react-lite';
import React, {useCallback} from 'react';
import {useStore} from 'src/app/stores/root-store';
import {Table} from 'src/shared/ui/table/table';
import {Text} from 'react-native';
import {Quote} from '../model/types';
import {Column} from 'src/shared/ui/table';
import {useFocusEffect} from '@react-navigation/native';

const columns: Column<Quote, keyof Quote>[] = [
  {
    acessor: 'title',
    title: 'Title',
  },
  {
    acessor: 'last',
    title: 'Last',
  },
  {
    acessor: 'highestBid',
    title: 'Highest Bid',
  },
  {
    acessor: 'percentChange',
    title: 'Percent Change',
  },
];

export const QuotesTable = observer(() => {
  const {quotesStore} = useStore();
  const {quotes, isLoading, getQuotes} = quotesStore;

  useFocusEffect(
    useCallback(() => {
      getQuotes();
      // let getQuotesInterval = setInterval(() => {
      //   getQuotes();
      // }, 5000);

      // return () => clearInterval(getQuotesInterval);
    }, [getQuotes]),
  );

  if (isLoading) {
    return <Text>Is loading</Text>;
  }

  return <Table data={quotes} columns={columns} />;
});

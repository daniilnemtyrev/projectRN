import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {QuotesTable} from 'src/modules/quote';
import {TabNavigatorParamsList} from 'src/navigation/tab-navigator';

type Props = BottomTabScreenProps<TabNavigatorParamsList, 'QUOTE'>;

export const QuotesScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <QuotesTable />
    </SafeAreaView>
  );
};

import React from 'react';
import {View, Text, Button} from 'react-native';
import {QuotesTable} from 'src/modules/quote';

export const QuotesScreen = ({navigation}) => {
  return (
    <View>
      <Text>QUOTE</Text>
      <QuotesTable />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

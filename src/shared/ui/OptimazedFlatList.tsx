import {memo} from 'react';
import React from 'react';
import {FlatList, Text, View} from 'react-native';

const data = [
  {
    id: '1',
    text: 'some comment',
    articleId: '1',
    userId: '1',
  },
  {
    id: '2',
    text: 'some comment 2',
    articleId: '1',
    userId: '1',
  },
  {
    id: '3',
    text: 'some comment 3',
    articleId: '1',
    userId: '1',
  },
  {
    id: '4',
    text: 'some comment 4',
    articleId: '1',
    userId: '1',
  },
  {
    id: '5',
    text: 'some comment 4',
    articleId: '1',
    userId: '1',
  },
  {
    id: 'dsa',
    text: 'some comment 4',
    articleId: '1',
    userId: '1',
  },
  {
    id: 'fdgd',
    text: 'some comment 4',
    articleId: '1',
    userId: '1',
  },
  {
    id: 'sdfsdf',
    text: 'some comment 4',
    articleId: '1',
    userId: '1',
  },
  {
    id: 'fdsf',
    text: 'some comment 4',
    articleId: '1',
    userId: '1',
  },
  {
    id: 'fsdfs',
    text: 'some comment 4',
    articleId: '1',
    userId: '1',
  },
  {
    id: 'sdfsf',
    text: 'some comment 4',
    articleId: '1',
    userId: '1',
  },
  {
    id: 'sdfds',
    text: 'some comment 4',
    articleId: '1',
    userId: '1',
  },
  {
    id: 'fsddf',
    text: 'some comment 4',
    articleId: '1',
    userId: '1',
  },
  {
    id: 'gsg',
    text: 'some comment 4',
    articleId: '1',
    userId: '1',
  },
  {
    id: 'hgjhg',
    text: 'some comment 4',
    articleId: '1',
    userId: '1',
  },
  {
    id: 'kjhk',
    text: 'some comment 4',
    articleId: '1',
    userId: '1',
  },
  {
    id: 'hjkjh',
    text: 'some comment 4',
    articleId: '1',
    userId: '1',
  },
  {
    id: 'fdgfdg',
    text: 'some comment 4',
    articleId: '1',
    userId: '1',
  },
  {
    id: 'ewrw',
    text: 'some comment 4',
    articleId: '1',
    userId: '1',
  },
  {
    id: 'cvbcv',
    text: 'some comment 4',
    articleId: '1',
    userId: '1',
  },
];

export const OptimazedFlatList = memo(() => {
  return (
    <FlatList
      data={data}
      initialNumToRender={5}
      renderItem={item => (
        <View style={{alignItems: 'center', height: 100}}>
          <Text>{item.item.text}</Text>
        </View>
      )}
    />
  );
});

OptimazedFlatList.displayName = 'OptimzedFlatList';

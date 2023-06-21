import React, {memo, useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {Column, TableItem} from './types';
import TableRow from './table-row';
import TableHeader from './table-header';

interface TableProps<T extends object, K extends keyof T> {
  data: TableItem<T>[];
  columns: Column<T, K>[];
}

const keyExtractor = <T extends object>(item: TableItem<T>) => item?.id;

const getItemLayout = (_: any, index: number) => ({
  length: 50,
  offset: 50 * index,
  index,
});

export const TableComponent = <T extends object, K extends keyof T>({
  data,
  columns,
}: TableProps<T, K>) => {
  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<TableItem<T>>) => (
      <TableRow item={item} columns={columns} />
    ),
    [columns],
  );

  return (
    <>
      <TableHeader columns={columns} />

      <FlatList
        data={data}
        initialNumToRender={22}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
      />
    </>
  );
};

export const Table = memo(TableComponent) as unknown as typeof TableComponent;

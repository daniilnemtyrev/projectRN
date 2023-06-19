import React, {memo, useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {Column, TableItem} from './types';
import TableCell from './table-cell';
import styled from 'styled-components/native';

interface TableProps<T extends object, K extends keyof T> {
  data: TableItem<T>[];
  columns: Column<T, K>[];
}

const keyExtractor = <T extends object>(item: TableItem<T>) => item?.id;

const getItemLayout = (_: any, index: number) => ({
  length: 30,
  offset: 30 * index,
  index,
});

export const TableComponent = <T extends object, K extends keyof T>({
  data,
  columns,
}: TableProps<T, K>) => {
  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<TableItem<T>>) => (
      <TableRow>
        {columns.map(column => (
          <TableCell item={item} column={column} />
        ))}
      </TableRow>
    ),
    [columns],
  );

  return (
    <FlatList
      data={data}
      initialNumToRender={15}
      maxToRenderPerBatch={15}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
    />
  );
};

const TableRow = styled.View`
  flex-direction: row;
  flex: 1 1 0px;
`;

export const Table = memo(TableComponent) as unknown as typeof TableComponent;

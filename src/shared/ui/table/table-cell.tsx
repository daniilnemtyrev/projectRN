import React, {memo} from 'react';
import styled from 'styled-components/native';
import {Column, TableItem} from './types';

interface TableRowProps<T extends object, K extends keyof T> {
  item: TableItem<T>;
  column: Column<T, K>;
}

export const TableCell = <T extends object, K extends keyof T>({
  item,
  column,
}: TableRowProps<T, K>) => {
  return (
    <Cell>
      <StyledText>{item[column.acessor]}</StyledText>
    </Cell>
  );
};

const Cell = styled.View`
  padding: 5px;
  border: 1px solid black;
  min-width: 92px;
  overflow: hidden;
  flex: 1 1 0px;
  height: 30px;
`;
const StyledText = styled.Text``;

export default memo(TableCell) as unknown as typeof TableCell;

import React, {memo} from 'react';
import styled from 'styled-components/native';
import {Column, TableItem} from './types';

interface TableRowProps<T extends object, K extends keyof T> {
  item: TableItem<T>;
  columns: Column<T, K>[];
}

export const TableRow = <T extends object, K extends keyof T>({
  item,
  columns,
}: TableRowProps<T, K>) => {
  return (
    <Row>
      {columns.map((column, index) => (
        <Cell key={column.title + index}>
          <StyledText>{item[column.acessor]}</StyledText>
        </Cell>
      ))}
    </Row>
  );
};

const Row = styled.View`
  flex-direction: row;
`;

const Cell = styled.View`
  border: 1px solid black;
  align-items: center;
  overflow: hidden;
  flex: 1 1 0px;
  height: 50px;
`;
const StyledText = styled.Text``;

export default memo(TableRow) as unknown as typeof TableRow;

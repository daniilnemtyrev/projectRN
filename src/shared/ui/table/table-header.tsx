import React, {memo} from 'react';
import styled from 'styled-components/native';
import {Column} from './types';

interface TableRowProps<T extends object, K extends keyof T> {
  columns: Column<T, K>[];
}

export const TableHeader = <T extends object, K extends keyof T>({
  columns,
}: TableRowProps<T, K>) => {
  return (
    <Columns>
      {columns.map((column, index) => (
        <HeaderCell key={column.title + index}>
          <HeaderText>{column.title}</HeaderText>
        </HeaderCell>
      ))}
    </Columns>
  );
};

const Columns = styled.View`
  flex-direction: row;
`;

const HeaderCell = styled.View`
  border: 1px solid black;
  flex: 1 1 0px;
  height: 55px;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export default memo(TableHeader) as unknown as typeof TableHeader;

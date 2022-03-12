import React from 'react';
import {Table} from 'semantic-ui-react';

export interface IUserViewProps {
  id: string;
  kolumna1: string;
  kolumna2: string;
  kolumna3: string;
  kolumna4: string;
}

export const ColumnView: React.FC<IUserViewProps> = (
  {
    id,
    kolumna1,
    kolumna2,
    kolumna3,
    kolumna4
  }
) => (
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Kolumna 1</Table.HeaderCell>
        <Table.HeaderCell>Kolumna 2</Table.HeaderCell>
        <Table.HeaderCell>Kolumna 3</Table.HeaderCell>
        <Table.HeaderCell>Kolumna 4</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          {id}
        </Table.Cell>
        <Table.Cell>
          {kolumna1}
        </Table.Cell>
        <Table.Cell>
          {kolumna2}
        </Table.Cell>
        <Table.Cell>
          {kolumna3}
        </Table.Cell>
        <Table.Cell>
          {kolumna4}
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default ColumnView;

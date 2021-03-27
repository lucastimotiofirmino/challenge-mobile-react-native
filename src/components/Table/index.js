import * as React from 'react';
import { DataTable } from 'react-native-paper';

const Table = (props) => (
  <DataTable>
    <DataTable.Header>
      <DataTable.Title>Name</DataTable.Title>
    </DataTable.Header>

    {
      props.rows.map((item) => (
        <DataTable.Row>
          <DataTable.Cell>{item.name}</DataTable.Cell>
        </DataTable.Row>
      ))
    }

    {/* <DataTable.Pagination
      page={1}
      numberOfPages={1}
      onPageChange={page => {
        console.log(page);
      }}
      label="1-2 of 6"
    /> */}
  </DataTable>
);

export default Table;
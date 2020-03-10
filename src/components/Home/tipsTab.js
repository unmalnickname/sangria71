import React from "react";
import { Divider, Header, Icon, Table } from "semantic-ui-react";

const TipsTab = () => {
  return (
    <React.Fragment>
      <Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={0}>Size</Table.Cell>
            <Table.Cell>1" x 2"</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Weight</Table.Cell>
            <Table.Cell>6 ounces</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Color</Table.Cell>
            <Table.Cell>Yellowish</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Odor</Table.Cell>
            <Table.Cell>Not Much Usually</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </React.Fragment>
  );
};

export default TipsTab;

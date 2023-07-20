import React from "react";
import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { IconButton } from "./IconButton";
import { EyeIcon } from "./EyeIcon";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";

const ResumeListTable = () => {
  const columns = [
    { name: "NAME", uid: "name" },
    { name: "DATE MODIFIED", uid: "date" },
    { name: "ACTIONS", uid: "actions" },
  ];
  const users = [
    {
      id: 1,
      name: "Tony Reichert",
      LastModified: "20 Jul 2023, 04:20 PM",
    },
    {
      id: 2,
      name: "Zoey Lang",
      LastModified: "20 Jul 2023, 04:20 PM",
    },
    {
      id: 3,
      name: "Jane Fisher",
      LastModified: "20 Jul 2023, 04:20 PM",
    },
    {
      id: 4,
      name: "William Howard",
      LastModified: "20 Jul 2023, 04:20 PM",
    },
    {
      id: 5,
      name: "Kristen Copper",
      LastModified: "20 Jul 2023, 04:20 PM",
    },
  ];
  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    console.log("cellValue ", cellValue);
    switch (columnKey) {
      case "name":
        return <Text size={14}>{cellValue}</Text>;
      case "date":
        return (
          <Text b size={14}>
            {cellValue}
          </Text>
        );

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details">
                <IconButton onClick={() => console.log("View user", user.id)}>
                  <EyeIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit user">
                <IconButton onClick={() => console.log("Edit user", user.id)}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => console.log("Delete user", user.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    <Table
      aria-label="Example table with custom cells"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="none"
    >
      <Table.Header columns={columns}>
        <Table.Column
          key={1}
          hideHeader={columns.uid === "actions"}
          align={columns.uid === "actions" ? "center" : "start"}
        >
          Name
        </Table.Column>
        <Table.Column
          key={2}
          hideHeader={columns.uid === "actions"}
          align={columns.uid === "actions" ? "center" : "start"}
        >
          Date Modified
        </Table.Column>
        <Table.Column
          key={3}
          hideHeader={columns.uid === "actions"}
          align={columns.uid === "actions" ? "center" : "start"}
        >
          Action
        </Table.Column>
      </Table.Header>
      <Table.Body items={users}>
        <Table.Row>
          <Table.Cell>Sample Resume</Table.Cell>
          <Table.Cell>20 Jul 2023, 04:20 PM</Table.Cell>
          <Table.Cell>
            {" "}
            <Row justify="center" align="center">
              <Col css={{ d: "flex" }}>
                <Tooltip content="Details">
                  <IconButton onClick={() => console.log("View user", user.id)}>
                    <EyeIcon size={20} fill="#979797" />
                  </IconButton>
                </Tooltip>
              </Col>
              <Col css={{ d: "flex" }}>
                <Tooltip content="Edit user">
                  <IconButton onClick={() => console.log("Edit user", user.id)}>
                    <EditIcon size={20} fill="#979797" />
                  </IconButton>
                </Tooltip>
              </Col>
              <Col css={{ d: "flex" }}>
                <Tooltip
                  content="Delete user"
                  color="error"
                  onClick={() => console.log("Delete user", user.id)}
                >
                  <IconButton>
                    <DeleteIcon size={20} fill="#FF0080" />
                  </IconButton>
                </Tooltip>
              </Col>
            </Row>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Hipla</Table.Cell>
          <Table.Cell>20 Feb 2023, 12:20 PM</Table.Cell>
          <Table.Cell>
            {" "}
            <Row justify="center" align="center">
              <Col css={{ d: "flex" }}>
                <Tooltip content="Details">
                  <IconButton onClick={() => console.log("View user", user.id)}>
                    <EyeIcon size={20} fill="#979797" />
                  </IconButton>
                </Tooltip>
              </Col>
              <Col css={{ d: "flex" }}>
                <Tooltip content="Edit user">
                  <IconButton onClick={() => console.log("Edit user", user.id)}>
                    <EditIcon size={20} fill="#979797" />
                  </IconButton>
                </Tooltip>
              </Col>
              <Col css={{ d: "flex" }}>
                <Tooltip
                  content="Delete user"
                  color="error"
                  onClick={() => console.log("Delete user", user.id)}
                >
                  <IconButton>
                    <DeleteIcon size={20} fill="#FF0080" />
                  </IconButton>
                </Tooltip>
              </Col>
            </Row>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Google internship</Table.Cell>
          <Table.Cell>07 Dec 2023, 6:20 AM</Table.Cell>
          <Table.Cell>
            {" "}
            <Row justify="center" align="center">
              <Col css={{ d: "flex" }}>
                <Tooltip content="Details">
                  <IconButton onClick={() => console.log("View user", user.id)}>
                    <EyeIcon size={20} fill="#979797" />
                  </IconButton>
                </Tooltip>
              </Col>
              <Col css={{ d: "flex" }}>
                <Tooltip content="Edit user">
                  <IconButton onClick={() => console.log("Edit user", user.id)}>
                    <EditIcon size={20} fill="#979797" />
                  </IconButton>
                </Tooltip>
              </Col>
              <Col css={{ d: "flex" }}>
                <Tooltip
                  content="Delete user"
                  color="error"
                  onClick={() => console.log("Delete user", user.id)}
                >
                  <IconButton>
                    <DeleteIcon size={20} fill="#FF0080" />
                  </IconButton>
                </Tooltip>
              </Col>
            </Row>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default ResumeListTable;

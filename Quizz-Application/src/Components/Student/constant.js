import React from "react";
import { Button } from "antd";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "20%",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: "20%",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    width: "40%",
  },
  {
    title: "Action",
    key: "action",
    width: "20%",
    render: () =>
      React.createElement(
        React.Fragment,
        null,
        React.createElement(Button, { type: "link" }, "Edit"),
        React.createElement(Button, { type: "link", danger: true }, "Delete")
      ),
  },
];

export { dataSource, columns };

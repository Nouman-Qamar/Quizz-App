import { Button, Card, Table } from "antd";
import { dataSource } from "./constant";

function Subjects() {
 

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "20%",
    },
    {
      title: "Level",
      dataIndex: "Level",
      key: "Level",
      width: "20%",
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
      width: "40%",
    },

    {
      title: "Action",
      key: "action",
      render: () => ( 
        <>
          <Button type="link">Edit</Button>
          <Button type="link" danger>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Card
        title="Subjects"
        style={{ padding: 24 }}
        extra={<Button type="primary">Add Subject</Button>}
      >
        <Table dataSource={dataSource} columns={columns} />;
      </Card>
    </>
  );
}

export default Subjects;

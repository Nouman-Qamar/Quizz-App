import { Button, Card, Table } from "antd";
import { columns, dataSource } from "./constant";

function Student() {
  return (
    <Card
      title="Student Info"
      style={{ padding: 24 }}
      extra={<Button type="primary">Add Student</Button>}
    >
      <h2>Welcome to the Student Page</h2>
      <p>This is where student-related content will be displayed.</p>
      <Table dataSource={dataSource} columns={columns} />
    </Card>
  );
}

export default Student;

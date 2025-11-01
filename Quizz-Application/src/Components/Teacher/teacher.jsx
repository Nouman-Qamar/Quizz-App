import React from 'react';
import { Typography, Card, Row, Col, Button, Space } from 'antd';
import { UserOutlined, BookOutlined, PlusOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Teacher = () => {
  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '24px auto', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)' }}>
      <Title level={2}>Teacher Dashboard</Title>
      <Text type="secondary">Welcome back, Professor Smith!</Text>

      <Space direction="vertical" size="large" style={{ width: '100%', marginTop: '24px' }}>
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={12}>
            <Card
              title="My Courses"
              extra={<Button type="link">View All</Button>}
              hoverable
            >
              <p><strong>Course ID: CS101</strong> - Introduction to Programming</p>
              <p><strong>Course ID: MA203</strong> - Calculus III</p>
              <p><strong>Course ID: PH101</strong> - General Physics</p>
              <p>You are currently teaching 3 courses.</p>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card
              title="Quick Actions"
              hoverable
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <Button type="primary" icon={<PlusOutlined />} block>Add New Course</Button>
                <Button icon={<UserOutlined />} block>Manage Students</Button>
                <Button icon={<BookOutlined />} block>View Gradebook</Button>
              </Space>
            </Card>
          </Col>
        </Row>

        <Card title="Recent Activity" hoverable>
          <p><strong>Yesterday:</strong> Graded assignments for CS101.</p>
          <p><strong>2 days ago:</strong> Posted new lecture notes for MA203.</p>
          <p><strong>Last week:</strong> Held office hours for PH101.</p>
        </Card>
      </Space>
    </div>
  );
};

export default Teacher;

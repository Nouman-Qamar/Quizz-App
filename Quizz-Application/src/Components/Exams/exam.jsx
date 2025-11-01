import React from 'react';
import { Typography, Card, Row, Col, Button, Space, Tag } from 'antd';

const { Title, Text } = Typography;

const Exams = () => {
  const examsData = [
    {
      id: 'ex001',
      title: 'Midterm - Introduction to Programming (CS101)',
      course: 'CS101',
      date: '2023-10-26',
      duration: '60 minutes',
      status: 'Available',
      link: '/exams/ex001', // Placeholder for actual exam link
    },
    {
      id: 'ex002',
      title: 'Final Exam - Calculus III (MA203)',
      course: 'MA203',
      date: '2023-12-15',
      duration: '120 minutes',
      status: 'Upcoming',
      link: '/exams/ex002',
    },
    {
      id: 'ex003',
      title: 'Quiz 1 - General Physics (PH101)',
      course: 'PH101',
      date: '2023-09-20',
      duration: '30 minutes',
      status: 'Completed',
      link: '/exams/ex003',
    },
    {
      id: 'ex004',
      title: 'Homework 5 - Data Structures (CS202)',
      course: 'CS202',
      date: '2023-11-01',
      duration: 'Self-paced',
      status: 'Available',
      link: '/exams/ex004',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available':
        return 'success';
      case 'Upcoming':
        return 'processing';
      case 'Completed':
        return 'default';
      default:
        return 'default';
    }
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '24px auto', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)' }}>
      <Title level={2}>Exams</Title>
      <Text type="secondary">View your upcoming, available, and completed exams.</Text>

      <Space direction="vertical" size="large" style={{ width: '100%', marginTop: '24px' }}>
        <Row gutter={[24, 24]}>
          {examsData.map(exam => (
            <Col xs={24} sm={12} lg={8} key={exam.id}>
              <Card
                title={exam.title}
                extra={<Tag color={getStatusColor(exam.status)}>{exam.status}</Tag>}
                hoverable
              >
                <p><strong>Course:</strong> {exam.course}</p>
                <p><strong>Date:</strong> {exam.date}</p>
                <p><strong>Duration:</strong> {exam.duration}</p>
                <Space style={{ marginTop: '16px' }}>
                  {exam.status === 'Available' && (
                    <Button type="primary">Start Exam</Button>
                  )}
                  {exam.status === 'Completed' && (
                    <Button>View Results</Button>
                  )}
                  <Button>Details</Button>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </Space>
    </div>
  );
};

export default Exams;

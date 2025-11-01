import React from 'react';
import { Typography, Card, Row, Col, Space, Button, Tag } from 'antd';
import { PlayCircleOutlined, DownloadOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Lectures = () => {
  const lecturesData = [
    {
      id: 'L001',
      title: 'Introduction to React Hooks',
      course: 'CS301 - Advanced Web Development',
      date: '2023-10-26',
      status: 'Available',
      notesLink: '#', // Placeholder for actual link
      videoLink: '#'  // Placeholder for actual link
    },
    {
      id: 'L002',
      title: 'Data Structures and Algorithms',
      course: 'CS201 - Computer Science Fundamentals',
      date: '2023-10-20',
      status: 'Completed',
      notesLink: '#',
      videoLink: '#'
    },
    {
      id: 'L003',
      title: 'Object-Oriented Programming Principles',
      course: 'CS201 - Computer Science Fundamentals',
      date: '2023-10-15',
      status: 'Completed',
      notesLink: '#',
      videoLink: '#'
    },
    {
      id: 'L004',
      title: 'Machine Learning Basics',
      course: 'AI401 - Artificial Intelligence',
      date: '2023-11-05',
      status: 'Upcoming',
      notesLink: '#',
      videoLink: '#'
    },
    {
      id: 'L005',
      title: 'Database Management Systems',
      course: 'CS302 - Database Systems',
      date: '2023-11-10',
      status: 'Upcoming',
      notesLink: '#',
      videoLink: '#'
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
      <Title level={2}>Lectures</Title>
      <Text type="secondary">Browse and access your course lectures and materials.</Text>

      <Space direction="vertical" size="large" style={{ width: '100%', marginTop: '24px' }}>
        <Row gutter={[24, 24]}>
          {lecturesData.map(lecture => (
            <Col xs={24} sm={12} lg={8} key={lecture.id}>
              <Card
                title={lecture.title}
                extra={<Tag color={getStatusColor(lecture.status)}>{lecture.status}</Tag>}
                hoverable
              >
                <p><strong>Course:</strong> {lecture.course}</p>
                <p><strong>Date:</strong> {lecture.date}</p>
                <Space style={{ marginTop: '16px' }}>
                  {lecture.status === 'Available' && (
                    <Button type="primary" icon={<PlayCircleOutlined />} href={lecture.videoLink} target="_blank">View Lecture</Button>
                  )}
                  <Button icon={<DownloadOutlined />} href={lecture.notesLink} target="_blank">Download Notes</Button>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </Space>
    </div>
  );
};

export default Lectures;

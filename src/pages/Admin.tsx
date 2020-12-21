import React from 'react';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Card, Typography, Alert, Button } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { getConstant } from '@/services/constant';
import { Access, useAccess, useRequest } from 'umi';

export default (): React.ReactNode => {
  const access = useAccess();

  const { data, error, loading } = useRequest<API.ConstantData>(() => {
    return getConstant();
  });
  console.log('error ---> ', error);
  console.log('data ---> ', data);
  console.log('loading ---> ', loading);

  return (
    <PageHeaderWrapper content="这个页面只有 admin 权限才能查看">
      <Card>
        <Alert
          message="更快更强的重型组件，已经发布。"
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 48,
          }}
        />
        <Typography.Title
          level={2}
          style={{
            textAlign: 'center',
          }}
        >
          <SmileTwoTone /> Ant Design Pro <HeartTwoTone twoToneColor="#eb2f96" /> You
        </Typography.Title>
      </Card>
      <p
        style={{
          textAlign: 'center',
          marginTop: 24,
        }}
      >
        Want to add more pages? Please refer to{' '}
        <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
          use block
        </a>
        。
      </p>
      {loading ? <p>loading...</p> : <p>{JSON.stringify(data)}</p>}
      <Access accessible={access.canAdmin} fallback={null}>
        <Button type="primary">带权限的按钮</Button>
      </Access>
    </PageHeaderWrapper>
  );
};

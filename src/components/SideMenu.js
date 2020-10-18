import React from 'react'
import { Select, Typography, Form, Input, Button } from 'antd';

const { Search } = Input;
const { Option } = Select;
const { Title } = Typography;

const handleChange = (value) => {
  console.log(`selected ${value}`);
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const SideMenu = () => {
  
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div style={{marginLeft:20}}>
      <Title level={4}>Buscar por:</Title>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Search
            placeholder="Por nombre"
            onSearch={value => console.log(value)}
            style={{ width: 140 }}
          />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Select defaultValue={null} placeholder="Comuna" onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Select defaultValue={null} placeholder="Distrito" onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Filtrar
          </Button>
        </Form.Item>
      </Form>
      
      
      
    </div>
  )
}

export default SideMenu;
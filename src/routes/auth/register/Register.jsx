
import { Button, Form, Input, Select, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../../api';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const { Title, Text } = Typography;

const Register = () => {
  const navigate  = useNavigate();
  const [form] = Form.useForm(); 

  const onFinish = async (values) => {
    try {
      const res = await axios.post("/users/register", values);
      console.log(res);
      form.resetFields(); 
      toast.success("Registration Successful");
      navigate("/auth");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data || "Something went wrong");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
   

  };

  return (
    <div className='w-full h-screen flex items-center justify-center flex-col'>
      <Title className='text-center' level={2}><Link style={{color: '#000'}} to="/">Register</Link></Title>
      <Text className='text-center mb-2 text-[#828282] text-base'>Register new account</Text>
      <Form
        form={form} 
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="auth_form register_form"
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <Form.Item
            label="Username"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email address"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Phone number"
            name="phone"
            rules={[{ required: true, message: "Please input your phone number!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Is Admin?"
            name="isAdmin"
            rules={[{ required: true, message: 'Please select category' }]}
          >
            <Select>
              <Select.Option value="true">true</Select.Option>
              <Select.Option value="false">false</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Street address"
            name="street"
            rules={[{ required: true, message: "Please input your street address!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Apartment address"
            name="apartment"
            rules={[{ required: true, message: "Please input your apartment address!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Zip address"
            name="zip"
            rules={[{ required: true, message: "Please input your zip address!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: "Please input your city!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Country"
            name="country"
            rules={[{ required: true, message: "Please input your country!" }]}
          >
            <Input />
          </Form.Item>
        </div>
        <Form.Item style={{ textAlign: 'center' }}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
        <Text style={{ textAlign: 'center' }}>Already have an account? <Link to="/auth">Login</Link></Text>
      </Form>
    </div>
  );
};

export default Register;

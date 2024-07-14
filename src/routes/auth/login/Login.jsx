import { Button, Form, Input, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../../api';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveToLocalStorage } from '../../../helpers';


const { Title, Text } = Typography;


const Login = () => {
  const [form] = Form.useForm(); 
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const res = await axios.post("/users/login", values);
      console.log(res);
      form.resetFields(); 
      toast.success("Login Successful");
      saveToLocalStorage("token", res.data.token);
      setInterval(() => navigate("/profile"), 1000);
      
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data || "Email or Password is incorrect");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
    
  return (

      
      <Form
        form={form}
        name="basic"
        layout="vertical"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="auth_form"
      >
        <Title className='text-center ' level={2}><Link style={{color: '#000'}} to="/">Login</Link></Title>
        <Text className='text-center mb-14 text-[#828282]'>Enter your credential to access your account.</Text>
        <Form.Item
          label="Email address "
          defaultValue="email@domain.com"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className='mb-12'
          defaultValue="Password"
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          className='text-center w-full'
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
        <Text className='text-center'>Don't have an account? <Link to="/auth/register">Register</Link></Text>
      </Form>
  )
}

export default Login

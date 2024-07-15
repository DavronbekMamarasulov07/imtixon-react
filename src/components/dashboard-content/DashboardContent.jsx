import { BsBoxSeam } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { DashboardContentTitle } from "../../utils";
import { Table, Button, Space, Modal, Form, Input, Select } from "antd";
import axios from "../../api";
import "./DashboardContent.css";
import TextArea from "antd/es/input/TextArea";
import Search from "antd/es/transfer/search";
import { toast } from "react-toastify";



const DashboardContent = ({ title, data, loading }) => {
    const [deleteProduct, setDeleteProduct] = useState(null);
    const [updateProduct, setUpdateProduct] = useState(null);
    const [deleteUser, setDeleteUser] = useState(null);
    const [newProduct, setNewProduct] = useState(null);

    const [form] = Form.useForm();


    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleDeleteProduct = async () => {
        try {
            const res = await axios.delete(`/products/${deleteProduct.id}`);
            console.log("Product Deleted", res.data);
            location.reload()
        } catch (error) {
            console.log(error)
        }
        setDeleteProduct(null)

    };

    const handleDeleteUser = async () => {
        try {
            const res = await axios.delete(`/users/${deleteUser.id}`);
            console.log("User Deleted", res.data);
            location.reload()
        } catch (error) {
            console.log(error)
        }
        setDeleteUser(null)
    };

    const onFinishUpdate = async (values) => {
        try {
            const res = await axios.put(`/products/${updateProduct.id}`, values)
            toast.success("Product Updated")
            if(res.data){
                location.reload()
            }
        } catch (error) {
            console.log(error)

        }
        setUpdateProduct(null)
    };
    const onFinishFailedUpdate = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onFinishAdd = (values) => {
        try {
            axios.post(`/products/`, values)
            console.log(values)
            toast.success("Product Added")
            if(res.data){
                location.reload()
            }
        } catch (error) {
            console.log(error)
        }
        setNewProduct(null)
    };
    const onFinishFailedAdd = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleUpdate = () => {
        console.log(updateProduct);
        setUpdateProduct(null)
    };

    const [columns, setColumns] = useState([]);

    useEffect(() => {
        if (data?.at(0)) {
            const { __v, _id, isAdmin, id, password, richDescription, isFeatured, images, dateCreated, ...rest } = data[0]
            setColumns(Object.keys({ ...rest, actions: "Delete" }).map((key) => ({
                title: key, dataIndex: key, key, width: key === "description" && 400, className: "td-item", render: (item) => {
                    if (typeof item === "string" && item.startsWith("http")) {
                        return <img width={50} data-td-item={key} src={item} />
                    }
                    else {
                        return <span data-td-item={key}>{item}</span>
                    }
                }
            })))
        }

    }, [data])


    return (
        <>
            <DashboardContentTitle>
                <div className="dashboard-content-title">{title}
                    {
                        title === "Products"
                            ?
                            <Button className="btn_add_product" onClick={() => setNewProduct(true)} type="primary">Add new product <BsBoxSeam /></Button>
                            :
                            <Search
                                placeholder="Search product"
                                enterButton="Search"
                                size="large"
                                onChange={(e) => console.log(e.target.value)}
                            />


                    }
                </div>
            </DashboardContentTitle>
            <Table
                columns={columns}
                dataSource={data.map(item => ({
                    ...item, key: item.id, actions: <div style={{ display: "flex", gap: 10 }}>
                        {
                            title === "Products" ?
                                <Button type="primary" danger onClick={() => setDeleteProduct(item)}><BsFillTrashFill /></Button>
                                :
                                <Button type="primary" danger onClick={() => setDeleteUser(item)}><BsFillTrashFill /></Button>

                        }
                        <Space />
                        {
                            title === "Products" && <Button type="primary" onClick={() => setUpdateProduct(item)}><AiFillEdit /></Button>
                        }
                    </div>
                }))}
                loading={loading}
                scroll={{
                    x: 1300,
                    y: 550
                }}
            />
            <Modal
                maskClosable={false}
                title={`Delete ${deleteProduct?.name}`}
                open={Boolean(deleteProduct)}
                onOk={handleDeleteProduct}
                onCancel={() => setDeleteProduct(null)}
                okButtonProps={{
                    danger: true
                }}
            >
                Are you really going to delete this product?
            </Modal>

            <Modal
                maskClosable={false}
                title={`Delete ${deleteUser?.name}`}
                open={Boolean(deleteUser)}
                onOk={handleDeleteUser}
                onCancel={() => setDeleteUser(null)}
                okButtonProps={{
                    danger: true
                }}
            >
                Are you really going to delete this user?
            </Modal>



            <Modal
                maskClosable={false}
                className="update-product"
                title={`Update ${updateProduct?.name}`}
                open={Boolean(updateProduct)}
                onOk={handleUpdate}
                onCancel={() => setUpdateProduct(null)}
                okButtonProps={{
                    danger: true
                }}
                footer={null}
            >
                <Form
                    form={form}
                    className="update-product-form"
                    layout="vertical"
                    onFinish={onFinishUpdate}
                    onFinishFailed={onFinishFailedUpdate}
                    autoComplete="off"
                >

                    <div className="update_product_form" style={{ display: 'grid', gridTemplateColumns: '1fr  ', gap: ' 0 20px ', justifyContent: 'center' }}>
                        <Form.Item
                            initialValue={updateProduct?.name}
                            label="Product name"
                            name="name"


                            rules={[
                                {
                                    required: true,
                                    message: 'Please input product name!',
                                },
                            ]}
                        >
                            <Input  />
                        </Form.Item>
                        <Form.Item
                            initialValue={updateProduct?.description}
                            label="Product description"
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input product description!',
                                },
                            ]}
                        >
                            <TextArea rows={4}  />
                        </Form.Item>
                        <Form.Item
                            initialValue={updateProduct?.richDescription}       
                            label="Product richDescription"
                            name="richDescription"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input product richDescription!',
                                },
                            ]}
                        >
                            <TextArea rows={4}  />
                        </Form.Item>
                        <Form.Item
                            initialValue={updateProduct?.image}
                            name="image"
                            label="Product image"
                            message="Please input new image!"
                            rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                        >
                            <Input  />
                        </Form.Item>
                        <Form.Item
                            initialValue={updateProduct?.brand}
                            label="Product brand"
                            name="brand"

                            rules={[
                                {
                                    required: true,
                                    message: 'Please input product brand!',
                                },
                            ]}
                        >
                            <Input  />
                        </Form.Item>
                        <Form.Item
                            initialValue={updateProduct?.price}
                            label="Product price"
                            name="price"

                            rules={[
                                {
                                    required: true,
                                    message: 'Please input product price!',
                                },
                            ]}
                        >
                            <Input  />
                        </Form.Item>
                        <Form.Item
                            initialValue={updateProduct?.countInStock}
                            label="Product countInStock"
                            name="countInStock"

                            rules={[
                                {
                                    required: true,
                                    message: 'Please input product countInStock!',
                                },
                            ]}
                        >
                            <Input  />
                        </Form.Item>
                        <Form.Item
                            initialValue={updateProduct?.rating}
                            label="Product rating"
                            name="rating"

                            rules={[
                                {
                                    required: true,
                                    message: 'Please input product rating!',
                                },
                            ]}
                        >
                            <Input  />
                        </Form.Item>
                        <Form.Item
                            initialValue={updateProduct?.numReviews}
                            label="Product numReviews"
                            name="numReviews"

                            rules={[
                                {
                                    required: true,
                                    message: 'Please input product numReviews!',
                                },
                            ]}
                        >
                            <Input  />
                        </Form.Item>
                        <Form.Item
                            initialValue={updateProduct?.isFeatured}
                            label="Product isFeatured"
                            name="isFeatured"
                            rules={[{ required: true, message: 'Please select isFeatured' }]}
                        >
                            <Select  >
                                <Select.Option value="true">true</Select.Option>
                                <Select.Option value="false">false</Select.Option>
                            </Select>
                        </Form.Item>

                    </div>
                    <Form.Item
                        className="btn-submit"
                        width="100%"
                    >
                        <Button type="primary" htmlType="submit" className="text-center w-full">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <Modal
                maskClosable={false}
                title={"Add new product"}
                open={Boolean(newProduct)}
                onOk={handleUpdate}
                onCancel={() => setNewProduct(null)}
                okButtonProps={{
                    danger: true
                }}
                footer={null}
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinishAdd}
                    onFinishFailed={onFinishFailedAdd}
                    autoComplete="off"
                >

                    <div className="update_product_form" style={{ display: 'grid', gridTemplateColumns: '1fr  ', gap: ' 0 20px ', justifyContent: 'center' }}>
                        <Form.Item

                            label="Product name"
                            name="name"


                            rules={[
                                {
                                    required: true,
                                    message: 'Please input product name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Product description"
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input product description!',
                                },
                            ]}
                        >
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item
                            label="Product richDescription"
                            name="richDescription"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input product richDescription!',
                                },
                            ]}
                        >
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item
                            label="Product image"
                            name="image"
                            message="Please input new image!"
                            rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Product brand"
                            name="brand"

                            rules={[
                                {
                                    required: true,
                                    message: 'Please input product brand!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Product price"
                            name="price"

                            rules={[
                                {
                                    required: true,
                                    message: 'Please input product price!',
                                },
                            ]}
                        >
                            <Input  type="number"/>
                        </Form.Item>
                        <Form.Item
                            label="Product countInStock"
                            name="countInStock"

                            rules={[
                                {
                                    required: true,
                                    message: 'Please input product countInStock!',
                                },
                            ]}
                        >
                            <Input type="number"/>
                        </Form.Item>
                        <Form.Item
                            label="Product rating"
                            name="rating"

                            rules={[
                                {
                                    required: true,
                                    message: 'Please input product rating!',
                                },
                            ]}
                        >
                            <Input type="number" />
                        </Form.Item>
                        <Form.Item
                            label="Product numReviews"
                            name="numReviews"

                            rules={[
                                {
                                    required: true,
                                    message: 'Please input product numReviews!',
                                },
                            ]}
                        >
                            <Input  type="number"/>
                        </Form.Item>
                        <Form.Item
                            label="Product isFeatured"
                            name="isFeatured"
                            rules={[{ required: true, message: 'Please select isFeatured' }]}
                        >
                            <Select  >
                                <Select.Option value="true">true</Select.Option>
                                <Select.Option value="false">false</Select.Option>
                            </Select>
                        </Form.Item>

                    </div>
                    <Form.Item
                        className="btn-submit"
                        width="100%"
                    >
                        <Button type="primary" htmlType="submit" className="text-center w-full">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

        </>
    );
};

export default DashboardContent;

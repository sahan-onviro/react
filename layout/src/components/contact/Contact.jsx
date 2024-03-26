import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useLayoutData } from '../../globals/Context/Layout';

const Contact = () => {
    const { setNavbarData, getId } = useLayoutData();
    const [editMode, setEditMode] = useState(false);
    const [idData, setIdData] = useState('');
    const [editIdData, setEditIdData] = useState({});
    const dataLocal = JSON.parse(localStorage.getItem('contactData'));

    const initialValues = {
        name: '',
        phone: '',
        email: '',
        address: '',
        message: '',
    }
    useEffect(() => {
        if (getId) {
            setEditMode(true);
            const selectedIdData = dataLocal.find((item) => item.id === getId);
            setIdData(selectedIdData);
            setEditIdData({
                name: selectedIdData.name,
                phone: selectedIdData.phone,
                email: selectedIdData.email,
                address: selectedIdData.address,
                message: selectedIdData.message,
            })
        }
        else {
            setEditMode(false); // Set editMode to false when getId is null
            setEditIdData({});
        }
    }, [getId, setEditMode])
    const schema = Yup.object().shape({
        name: Yup.string().required("required"),
        phone: Yup.number().required("required"),
        email: Yup.string().required("required"),
        address: Yup.string().required("required"),
        message: Yup.string().required("required"),
    })
    return (
        <>
            <section className='contact-page'>
                <Formik
                    initialValues={editMode ? editIdData : initialValues}
                    enableReinitialize={true}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        let datas = JSON.parse(localStorage.getItem('contactData'));
                        if (editMode) {
                            datas = datas.map((item, index) => (item.id === getId ? { ...values, id: getId } : item))
                            setNavbarData('Table');

                        }
                        else {
                            const data = {
                                id: Math.floor(Math.random() * 100) + 1,
                                ...values,
                            }
                            datas.push(data);
                        };
                        localStorage.setItem('contactData', JSON.stringify(datas));
                    }}
                >
                    {formik => (
                        <Form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="" className="form-label">name</label>
                                <Field type="text" className='form-control' onChange={formik.handleChange} value={formik.values.name} name="name" placeholder="Name" />
                                <ErrorMessage component="div" name='name' className='error' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="form-label">phone</label>
                                <Field type="phone" className='form-control' onChange={formik.handleChange} value={formik.values.phone} name="phone" placeholder="phone" />
                                <ErrorMessage component="div" name='phone' className='error' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="form-label">email</label>
                                <Field type="email" className='form-control' onChange={formik.handleChange} value={formik.values.email} name="email" placeholder="email" />
                                <ErrorMessage component="div" name='email' className='error' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="form-label">address</label>
                                <Field type="text" className='form-control' onChange={formik.handleChange} value={formik.values.address} name="address" placeholder="address" />
                                <ErrorMessage component="div" name='address' className='error' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="form-label">message</label>
                                <Field as="textarea" type="text" className='form-control' onChange={formik.handleChange} value={formik.values.message} name="message" placeholder="message" />
                                <ErrorMessage component="div" name='message' className='error' />
                            </div>
                            <div className="btn-wrapper">
                                <button type='submit'>Submit</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </section >
        </>
    )
}

export default Contact
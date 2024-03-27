import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useLayoutData } from '../../globals/Context/Layout';
import { useDispatch } from 'react-redux';
import { ViewMenuContent } from '../../redux/tabSlice';
import { v4 as uuidv4 } from 'uuid';

const Contact = () => {
    const { getId, setId } = useLayoutData();
    const [editMode, setEditMode] = useState(false);
    const [editIdData, setEditIdData] = useState({});

    const dispatch = useDispatch();
    const dataLocal = JSON.parse(localStorage.getItem('contactData'));

    const generateID = () => {
        const uniqueID = uuidv4();
        return uniqueID;
    };
    const initialValues = {
        name: '',
        phone: '',
        email: '',
        address: '',
        message: '',
    }
    const schema = Yup.object().shape({
        name: Yup.string().required("required"),
        phone: Yup.number().required("required"),
        email: Yup.string().required("required"),
        address: Yup.string().required("required"),
        message: Yup.string().required("required"),
    })
    const handleSubmitForm = (values) => {
        let datas = JSON.parse(localStorage.getItem('contactData'));
        console.log(datas);
        if (editMode) {
            datas = datas.map((item, index) => (item.id === editIdData.id ? { ...values, id: editIdData.id } : item))
        }
        else {
            const data = {
                id: generateID(),
                ...values,
            }
            datas.push(data);
        };
        localStorage.setItem('contactData', JSON.stringify(datas));
        dispatch(ViewMenuContent('Table'))
    }
    useEffect(() => {
        if (getId) {
            setEditMode(true);
            const selectedIdData = dataLocal.find((item) => item.id === getId);
            setEditIdData({
                id: selectedIdData.id,
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
        return () => {
            setId('');
        };
    }, [setId])

    return (
        <>
            <section className='contact-page'>
                <Formik
                    initialValues={editMode ? editIdData : initialValues}
                    enableReinitialize={true}
                    validationSchema={schema}
                    onSubmit={handleSubmitForm}
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
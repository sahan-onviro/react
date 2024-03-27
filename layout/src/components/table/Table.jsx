import React, { useState } from 'react'
import { useLayoutData } from '../../globals/Context/Layout';
import { useDispatch } from 'react-redux';
import { ViewMenuContent } from '../../redux/tabSlice';

const Table = () => {
  const { setId } = useLayoutData();
  const [contactD, setContactD] = useState(JSON.parse(localStorage.getItem(`contactData`)));

  const dispatch = useDispatch();
  
  const handleDeletebtn = (index) => {
    const updateData = contactD.filter((item, i) => i !== index);
    localStorage.setItem('contactData', JSON.stringify(updateData));
    setContactD(updateData)
  }
  const handleEdit = (item) => {
    setId(item.id)
    dispatch(ViewMenuContent('Contact'));
  }
  return (
    <section className='table-contact'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Messages</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>

          {contactD?.map((item, index) => (
            <tr key={index}>
              <td>{item?.name}</td>
              <td>{item?.phone}</td>
              <td>{item?.email}</td>
              <td>{item?.address}</td>
              <td>{item?.message}</td>
              <td>

                <button type='button' onClick={() => handleEdit(item)}>edit</button>
                <button type='button' onClick={() => handleDeletebtn(index)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Table
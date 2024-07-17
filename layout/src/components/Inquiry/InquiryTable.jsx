import React from "react";
import { useState } from "react";
import { useLayoutData } from "../../globals/Context/Layout";
import { useDispatch } from "react-redux";
import { ViewMenuContent } from "../../redux/tabSlice";
import Moment from "react-moment";

const InquiryTable = () => {
  const { setId } = useLayoutData();
  const dispatch = useDispatch();
  const [data, setData] = useState(JSON.parse(localStorage.getItem("Inquiry")));
  const handleDeletebtn = (id) => {
    const updateData = data?.filter((item) => item?.id !== id);
    localStorage.setItem("Inquiry", JSON.stringify(updateData));
    setData(updateData);
  };
  const handleEditbtn = (id) => {
    setId(id);
    dispatch(ViewMenuContent("Inquiry"));
  };
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>img</th>
            <th>Phone</th>
            <th>Email</th>
            <th>country</th>
            <th>Messages</th>
            <th>skill</th>
            <th>date</th>
            <th>isActive</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td>{item?.name}</td>
              <td>img</td>
              {/* <td>{item?.img}</td> */}
              <td>{item?.phone}</td>
              <td>{item?.email}</td>
              <td>{item?.country}</td>
              <td>{item?.messages}</td>
              <td>{item?.skill}</td>
              <td>
                <Moment format="YYYY/MM/DD" date={item?.date} />
              </td>
              <td>{item?.isActive}</td>
              <td>
                <button type="button" onClick={() => handleEditbtn(item?.id)}>
                  edit
                </button>
                <button type="button" onClick={() => handleDeletebtn(item?.id)}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InquiryTable;

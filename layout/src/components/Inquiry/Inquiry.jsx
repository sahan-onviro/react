import React from "react";
import FormSection from "../global/FormSection";
import * as Yup from "yup";
import { formObj } from "../../globals/Data/formObj";
import UsePost from "../../api/UsePost";
import { v4 as uuidv4 } from "uuid";
import { useLayoutData } from "../../globals/Context/Layout";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ViewMenuContent } from "../../redux/tabSlice";

const Inquiry = () => {
  const dispatch = useDispatch();
  const { getId, setId } = useLayoutData();

  const [updateId, setUpdateId] = useState(getId);
  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem("Inquiry")) || []
  );

  const dataMap = useMemo(
    () => new Map(data.map((item) => [item.id, item])),
    [data]
  );
  const findItemById = useCallback((id) => dataMap.get(id), [dataMap]);

  const [editData, setEditData] = useState();

  useEffect(() => {
    if (getId && dataMap.size > 0) {
      const item = findItemById(getId);
      if (item) {
        setEditMode(true);
        setEditData(item);
      }
    }
    return () => {
      setId();
    };
  }, [getId, setId, dataMap, findItemById]);

  const initialValues = useMemo(() => {
    if (editMode && editData) {
      return {
        name: editData.name,
        phone: editData.phone,
        email: editData.email,
        messages: editData.messages,
        country: editData.country,
        skill: editData.skill,
        isActive: editData.isActive,
        date: editData.date,
        img: editData.img,
      };
    } else {
      return {
        name: "",
        phone: "1234567890",
        email: "",
        messages: "",
        country: "",
        skill: [],
        isActive: null,
        date: new Date(),
        img: null,
      };
    }
  }, [editMode, editData]);
  const customControl = [
    {
      label: true,
      required: true,
      name: "name",
      type: "text",
      cols: "1",
      as: "input",
    },
    {
      label: true,
      name: "phone",
      type: "number",
      cols: "1",
      as: "input",
      disabled: true,
    },
    {
      label: true,
      name: "email",
      type: "email",
      cols: "1",
      as: "input",
    },
    {
      label: true,
      required: true,
      name: "messages",
      cols: "1",
      as: "textarea",
    },
    {
      label: true,
      required: true,
      name: "country",
      cols: "1",
      as: "select",
      option: formObj.map((item) => ({
        name: item?.name,
        value: item?.name,
      })),
    },
    {
      label: true,
      required: true,
      name: "skill",
      type: "checkbox",
      as: "checkbox",
      cols: "1",
      option: [
        {
          optitem: "running",
          value: "running",
        },
        {
          optitem: "hiking",
          value: "hiking",
        },
        {
          optitem: "sleeping",
          value: "sleeping",
        },
      ],
    },
    {
      label: true,
      name: "isActive",
      type: "radio",
      as: "radio",
      cols: "1",
      option: [
        {
          optitem: "yes",
          value: true,
        },
        {
          optitem: "no",
          value: false,
        },
      ],
    },
    {
      label: true,
      as: "date",
      name: "date",
      type: "text",
      cols: "1",
      onChange: (formik) => (date) => {
        formik.setFieldValue("date", date);
      },
    },
    {
      label: true,
      as: "file",
      name: "img",
      cols: "1",
      onChange: (formik) => (event) => {
        formik.setFieldValue("img", event.currentTarget.files[0]);
      },
    },
  ];
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name can't be longer than 50 characters"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    messages: Yup.string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters long")
      .max(500, "Message can't be longer than 500 characters"),
    country: Yup.string().required("Country is required"),
    skill: Yup.array()
      .min(1, "At least one skill is required")
      .required("Skills are required"),
    isActive: Yup.bool()
      .oneOf([true, false], "You must agree to the terms and conditions")
      .required("must required"),
    date: Yup.date().required("Date is required").nullable(),
    img: Yup.mixed().required("Image is required"),
  });

  const handleSumbit = async (values) => {
    const id = uuidv4();
    const formData = new FormData();

    Object.entries(values).forEach(([key, entry]) => {
      if (key === "img" && entry) {
        formData.set("img", entry);
      } else if (key === "isActive") {
        formData.set("isActive", JSON.parse(entry));
      } else {
        formData.append(
          key,
          Array.isArray(entry) ? JSON.stringify(entry) : entry || ""
        );
      }
    });

    const newData = editMode
      ? data.map((item) =>
          item.id === updateId ? { id: updateId, ...values } : item
        )
      : [...data.filter((item) => item.id !== id), { id, ...values }];
    localStorage.setItem("Inquiry", JSON.stringify(newData));
    dispatch(ViewMenuContent("InquiryTable"));
  };

  return (
    <div>
      <FormSection
        initial={initialValues}
        schema={validationSchema}
        submit={handleSumbit}
        settings={customControl}
      />
    </div>
  );
};

export default Inquiry;

import React from "react";
import FormSection from "./global/FormSection";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { formObj } from "../globals/Data/formObj";
const Inquiry = () => {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    messages: "",
    country: "",
  };
  const customControl = [
    {
      name: "name",
      type: "text",
      cols: "full",
      as: "input",
    },
    {
      name: "phone",
      type: "number",
      cols: "1",
      as: "input",
    },
    {
      name: "email",
      type: "email",
      cols: "1",
      as: "input",
    },
    {
      name: "messages",
      cols: "full",
      as: "textarea",
    },
    {
      name: "country",
      cols: "full",
      as: "select",
      option: formObj.map((item) => ({ name: item?.name, value: item?.name })),
    },
    {
      name: "skill",
      type: "checkbox",
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
      name: "isActive",
      type: "radio",
      cols: "1",
      option: [
        {
          optitem: "yes",
          value: "yes",
        },
        {
          optitem: "no",
          value: "no",
        },
      ],
    },
  ];
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("name"),
    phone: Yup.string().required("phone"),
    email: Yup.string().required("email"),
    messages: Yup.string().required("messages"),
    country: Yup.string().required("country"),
  });
  const handleSumbit = (values) => {
    console.log(values);
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

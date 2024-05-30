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
    college: "",
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
    { name: "college", type: "text", cols: "full", as: "input" },
  ];
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("name"),
    phone: Yup.string().required("phone"),
    email: Yup.string().required("email"),
    messages: Yup.string().required("messages"),
    college: Yup.string().required("college"),
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

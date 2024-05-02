import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
const FormSection = ({ initial, schema, submit, settings }) => {
  return (
    <section className="form-section">
      <div className="form-wrapper">
        <Formik
          initialValues={initial}
          validationSchema={schema}
          onSubmit={submit}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-2 gap-8">
                {settings.map((item, index) => (
                  <React.Fragment key={index}>
                    <div className={`col-span-${item?.cols}`}>
                      <div className="form-group" key={index}>
                        <label htmlFor="" className="form-label">
                          {item?.name}
                        </label>
                        {item?.as === "select" && item?.option ? (
                          <Field
                            as={item?.as || null}
                            type={item?.type || null}
                            className="form-control border border-solid border-green-400"
                            onChange={formik.handleChange}
                            placeholder={item?.name}
                            name={item?.name}
                            defaultValue="DEFAULT"
                          >
                            <>
                            <option value="DEFAULT" disabled>Selected</option>
                              {item?.option?.map((item, index) => (
                                <option value={item?.name} key={index}>
                                  {item?.name}
                                </option>
                              ))}
                            </>
                          </Field>
                        ) : (
                          <Field
                            as={item?.as || null}
                            type={item?.type || null}
                            className="form-control border border-solid border-green-400"
                            onChange={formik.handleChange}
                            placeholder={item?.name}
                            name={item?.name}
                          />
                        )}

                        <ErrorMessage
                          component="div"
                          name={item?.name}
                          className="error"
                          Style="color:red;"
                        />
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                <div className="col-span-full">
                  <div className="btn-wrapper">
                    <button
                      type="submit"
                      className="inline-block px-4 py-2 bg-black text-white"
                    >
                      Sumbit
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default FormSection;

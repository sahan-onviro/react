import React, { Children } from "react";

export const Input = ({
  type,
  name,
  id,
  value,
  placeholder,
  as,
  cols,
  rows,
  children,
}) => {
  if (as === "textarea") {
    return (
      <textarea
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        cols={cols}
        rows={rows}
      ></textarea>
    );
  } else if (as === "select") {
    return (
      <select name={name} id={id}>
        {children}
      </select>
    );
  }
  return (
    <>
      <div className="form-group">
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

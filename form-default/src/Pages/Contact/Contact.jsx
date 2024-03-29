import React from "react";
import { Input } from "../../components/Input/Input";

const Contact = () => {
  return (
    <>
      <form action="">
        <Input type='text' id='name' name='name'placeholder='hello' />
        <Input type='number' id='phone' name='phone' placeholder='+9779845465456' />
        <Input type='text' id='name' name='name'  placeholder='hello' />
        <Input as='textarea' id='desc' name='desc' placeholder='desc' rows='6' cols='4' />
        <Input as='textarea' id='desc' name='desc' placeholder='desc' rows='4' cols='4' />
        <Input as='select' id='number' name='name'>
            <option value="1">1</option>
            <option value="2">2</option>
        </Input>
      </form>
    </>
  );
};

export default Contact;

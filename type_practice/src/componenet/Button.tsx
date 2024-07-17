import React, { FormEvent, MouseEvent } from "react";

type Props = {
  // onClick: Function,
  // onClick(): string, method return string
  // onClick(): void, method return nothing
  // onClick(text: string): void
  // onClick: (text: string) => void
  // onClick: (e: React.MouseEvent) => void // baisc mouse event
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: any
  // basic INput change
  // onChange: (e: FormEvent<HTMLInputElement>) => void

};
const Button = ({ onClick, children }: Props) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      
      {/* <a onClick={onClick}>Click ME</a> wont work */}
    </>
  );
};

export default Button;

import React from "react";

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode;
};

const AdvButton: React.FC<Props> = ({ onClick, children }) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>

      {/* <a onClick={onClick}>Click ME</a> wont work */}
    </>
  );
};

export default AdvButton;

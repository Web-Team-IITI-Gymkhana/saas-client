import React from 'react';
import Main from '../folder/Main';

const FillingLayout = ({ title, description, cta, children }) => {
  return (
    <>
      <div className="flex flex-col h-full  ml-2 rounded-xl ">
        <div className="flex flex-row justify-between items-center">{cta}</div>
        <Main />
        <div className="w-full grow ">{children}</div>
      </div>
    </>
  );
};

export default FillingLayout;

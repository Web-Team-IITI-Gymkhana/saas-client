import React from 'react';

const SidebarBottomItem = ({ children, ...nativeProps }) => {
  return (
    <div
      {...nativeProps}
      className="flex justify-center w-5/6 h-40 mb-8 bg-saas-primary drop-shadow-lg  rounded-2xl hover:scale-105 duration-150 text-main"
    >
      {children}
    </div>
  );
};

export default SidebarBottomItem;

import React from 'react';
import Button from '../../atoms/Button';

const SidebarBottomItem = ({ children, ...nativeProps }) => {
  return (
    <div
      {...nativeProps}
      className="flex justify-center w-5/6 h-40 mb-8 bg-saasselected rounded-large text-white font"
    >
      {children}
    </div>
  );
};

export default SidebarBottomItem;

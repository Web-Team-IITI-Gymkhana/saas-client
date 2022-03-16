import React from 'react';
import Button from '../../atoms/Button';

const SidebarBottomItem = ({ children, ...nativeProps }) => {
  return (
    <div
      {...nativeProps}
      className="flex justify-center w-full h-40 mb-3 bg-saasselected rounded-large"
    >
      {children}
    </div>
  );
};

export default SidebarBottomItem;

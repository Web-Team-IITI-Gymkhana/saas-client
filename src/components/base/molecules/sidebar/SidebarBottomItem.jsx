import React from 'react';
import Button from '../../atoms/Button';

const SidebarBottomItem = ({ children, ...nativeProps }) => {
  return (
    <div
      {...nativeProps}
      className="flex justify-center w-5/6 h-40 mb-8 bg-saas-primary rounded-large text-main font"
    >
      {children}
    </div>
  );
};

export default SidebarBottomItem;

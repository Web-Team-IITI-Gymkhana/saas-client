import React from 'react';

const CompanyProfile = ({ children, ...nativeProps }) => {
  return (
    <div
      {...nativeProps}
      className="flex items-center justify-center w-full h-20 mt-5 w-full rounded-large mb-4 bg-saas-header shadow-lg"
    >
      {children}
    </div>
  );
};

export default CompanyProfile;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarTopItem = ({ icon, children, ...nativeProps }) => {
  return (
    <NavLink
      {...nativeProps}
      className={(navbar) =>
        'flex flex-row items-center w-full pt-3 pb-3 text-lg hover:text-bg-saasselected ' +
        (navbar.isActive ? 'text-saasselected' : '')
      }
    >
      <div className="mr-5">{icon && <FontAwesomeIcon icon={icon} />}</div>
      {children}
    </NavLink>
  );
};

export default SidebarTopItem;

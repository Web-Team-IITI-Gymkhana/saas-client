import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SidebarTopItem= ({
  icon,
  children,
  ...nativeProps
}) => {
  return (
    <NavLink
      {...nativeProps}
      className={(navbar) =>
        'flex items-center justify-center  w-full h-12 mt-2 w-full rounded-large p-4 hover:bg-saasselected ' +
        (navbar.isActive ? 'bg-saasselected' : '')
      }
    >
        {children || (icon && <FontAwesomeIcon icon={icon} />)}
    </NavLink>
  )
}

export default SidebarTopItem

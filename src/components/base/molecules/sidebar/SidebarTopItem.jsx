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
        'flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-primary ' +
        (navbar.isActive ? 'bg-primary' : '')
      }
    >
      {children || (icon && <FontAwesomeIcon icon={icon} />)}
    </NavLink>
  )
}

export default SidebarTopItem

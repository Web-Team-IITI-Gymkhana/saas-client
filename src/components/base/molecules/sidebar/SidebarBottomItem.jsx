import React from 'react'
import Button from '../../atoms/Button'

const SidebarBottomItem= (
  props
) => {
  return (
    <Button
      {...props}
      className="flex items-center justify-center w-16 h-16 bg-gray-900 hover:bg-primary"
    />
  )
}

export default SidebarBottomItem

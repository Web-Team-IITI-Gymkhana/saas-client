import React from 'react'

import Logo from '@/assets/img/logo512.png'

const SidebarLogo = () => {
  return (
    <a href="/app" className="flex items-center justify-center mt-3">
      <div className="grid place-items-center mx-2 w-8 h-8 border-gray-600">
        <img alt='logo' src={Logo} className="dark:hidden" />
        <img alt='logo' src={Logo} className="hidden dark:flex" />
      </div>
    </a>
  )
}

export default SidebarLogo

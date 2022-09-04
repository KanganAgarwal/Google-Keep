import React from 'react'
import {LightBulbIcon} from "@heroicons/react/outline"
const Header = () => {
  return (
    <div className="bg-yellow-500 h-[60px] w-full text-white flex items-center justify-center">
    <LightBulbIcon className="h-8 w-8 "/> <span className="font-semibold text-lg ml-2">Google Keep</span>
    </div>
  )
}

export default Header
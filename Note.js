import { TrashIcon } from '@heroicons/react/outline'
import React from 'react'

const Note = ({note,id,deleted}) => {
  const handleClick=(id)=>{
    deleted(id)
    alert('Delete note ?')
  }
  return (
    <div className=" border-gray-400 border m-4 inline-block w-[100%]  lg:w-[50%] xl:w-[30%] my-6 p-4 rounded-lg">
      <div className="font-bold text-lg text-center underline">{note.title}</div>
      <div className="flex items-center">
      <div className="font-normal text-sm">{note.description}</div>
    <span className="h-10 w-10 bg-yellow-400 rounded-full ml-auto flex items-center justify-center m-2">
    <TrashIcon className="h-7 w-7 cursor-pointer text-white" onClick={()=>{handleClick(id)}}/>
    </span>  
    </div>
    </div>
  )
}

export default Note
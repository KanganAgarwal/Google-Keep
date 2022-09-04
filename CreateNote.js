import {  PlusIcon } from '@heroicons/react/outline'
import React,{useState} from 'react'

const CreateNote = ({notes,setNotes}) => {
 
   const [note,setNote]=useState({title:"",description:""})
   const handleClick=()=>{
  if(!note.title.length || !note.description.length)
  {alert("Please enter title and description")}
 else{
   setNotes([...notes,{title:note.title,description:note.description}])
   setNote({title:"",description:""})
  }
   }
  return (
    <div className="h-[30%] " >
        <div className="h-[28%] my-auto flex flex-col w-[40%] mx-auto mt-[50px] border-2 border-gray-400 rounded-md">
            <input type="text" placeholder="Add a note.." value={note.title}
             onChange={(e)=>{setNote({title: e.target.value})}}
              className="py-6 px-3 outline-none border-b border-gray-500 h-[100px]"  />
           
            <textarea value={note.description} name="description" onChange={(e)=>setNote({...note,description:e.target.value})} rows="4" cols="10" className="outline-none py-3 px-3 h-[150px]" placeholder="Add a description.."></textarea>
     <span className="bg-yellow-400 h-10 w-10 rounded-full flex items-center justify-center ml-auto -mr-4 -mb-4">
       <PlusIcon className=" h-6 w-6 text-white cursor-pointer" onClick={handleClick}/>
       </span>
      
        </div>
    </div>
  )
}

export default CreateNote
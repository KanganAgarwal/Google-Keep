import Header from "./Components/Header";
import CreateNote from "./Components/CreateNote";
import Note from "./Components/Note";
import {useState} from 'react'
function App() {
  const [notes,setNotes]=useState([])
  const deleted=(id)=>{
    setNotes(notes.filter((item,index)=>{
      return index!=id
    }
    ))
  }
  return (
   <div>
    <Header/>
    <CreateNote notes={notes} setNotes={setNotes} />
    
    <div className="flex items-center flex-wrap mx-auto w-[90%] ">
      {notes.map((note,i)=>(
 <Note key={i} note={note} deleted={deleted} id={i}/>
      ))}
     
  
    </div>
    </div>
    
  );
}

export default App;

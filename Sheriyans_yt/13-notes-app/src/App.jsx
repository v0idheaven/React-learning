import React, { useState } from "react";



const App = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState(''); 

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task]
    copyTask.push({title,details})

    setTask(copyTask)

    setTitle('')
    setDetails('')
  };

  const deleteNote = (idx)=>{
  const copyTask = [...task];
      copyTask.splice(idx,1)

      setTask(copyTask)


  }

  return (
    <div className="min-h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-5 lg:w-1/2 p-10 items-start flex-col"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

        {/* PHELA INPUT HEADING K LIYE */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2 w-full font-medium border-2 outline-none rounded"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />

        {/* DUSRA INPUT DETAILS K LIYE */}
        <textarea
          type="text"
          placeholder="Write Details"
          className="px-5 py-2 h-40 font-medium w-full border-2 outline-none rounded"
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />

        <button className="bg-white active:bg-gray-200 active:scale-97 text-black font-medium w-full px-5 py-2 outline-none rounded">
          Add Note
        </button>

      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10">

        <h1 className="text-4xl font-bold">Recent Notes</h1>

        <div className="flex flex-wrap items-start justify-start gap-5 mt-7 overflow-auto h-[90%]">
          {task.map(function(elem,idx){
            return <div key={idx} className="flex justify-between flex-col relative h-56 w-40 lg:w-41 rounded-2xl text-black py-4 px-4 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className="leading-tight text-lg font-bold line-clamp-2 wrap-break-word">{elem.title}</h3>
              <p className="mt-1 leading-tight font-semibold text-gray-600 wrap-break-word text-xs line-clamp-5">{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white">Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from 'react'

const Task = () => {

    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [status, setStatus] = useState('');
    const [priority, setPriority] = useState('');
    const [createdAt,setCreatedAt]=useState('');
const submitform=(e)=>{
    e.preventDefault();

  const data = {
      title: title,
      description: description,
      status: status,
      priority: priority,
      createdAt:createdAt
    }
    console.log(data)
    const res= adddetails(data);
    console.log(res);
}

const adddetails=async(data)=>{
    console.log(data);
    const res=await fetch('/api/task',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data)
    }

    )
    console.log("msg",res)
    return res;
}

  
const handleDelete = async (id) => {
  try {
    const response = await fetch(`http://localhost:5005/api/tasks/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type':'application/json',
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete task");
    }

    settasks((prev) => prev.filter((task) => task._id !== id));
  } catch (error) {
    console.error(error.message);
  }
};
  




  return (
    <div>
          <form onSubmit={submitform} className='text-xl text-center mt-10'>
        <div>
                  <h2 className="text-xl font-bold text-gray-800 text-center mb-6">Enter Task</h2>
             
          <input
            type="text"
            id="title"
            title="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-400 focus:border-blue-500"
            placeholder="Enter Title"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800 text-center mb-6">Enter Description</h2>
          <input
            type="text"
            id="description"
            description="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className=" border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-400 focus:border-blue-500"
              placeholder="Enter description"
          />
        </div>
              
        <div>
          <h2 className="text-xl font-bold text-gray-800 text-center mb-6">Status</h2>
          <input
            type="text"
            id="status"
            status="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className=" border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-400 focus:border-blue-500"
              placeholder="Enter status"
          />
        </div>
              
        <div>
          <h2 className="text-xl font-bold text-gray-800 text-center mb-6">Priority</h2>
          <input
            type="text"
            id="priority"
            priority="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className=" border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-400 focus:border-blue-500"
              placeholder="Enter priority"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800 text-center mb-6">Created At</h2>
          <input
            type="text"
            id="createdAt"
            createdAt="createdAt"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
            className=" border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-400 focus:border-blue-500"
              placeholder="Created At"
          />
        </div>

        <button type="submit" className=" border rounded-lg p-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            submit
        </button>
      </form>
      <MdDelete
                  className="text-red-500 text-2xl cursor-pointer hover:text-red-700"
                  onClick={() => handleDelete(task._id)}
      />
    </div>
  )
}

export default Task
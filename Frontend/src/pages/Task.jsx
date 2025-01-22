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





  return (
    <div>
          <form onSubmit={submitform} className='text-xl text-center mt-10'>
        <div>
                  <h2>Enter Task</h2>
             
          <input
            type="text"
            id="title"
            title="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <h2>Enter Description</h2>
          <input
            type="text"
            id="description"
            description="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
              
        <div>
          <h2>Status</h2>
          <input
            type="text"
            id="status"
            status="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
              
        <div>
          <h2>Priority</h2>
          <input
            type="text"
            id="priority"
            priority="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
        </div>

        <div>
          <h2>Created At</h2>
          <input
            type="text"
            id="createdAt"
            createdAt="createdAt"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
          />
        </div>

        <button type="submit">
            submit
        </button>
      </form>
    </div>
  )
}

export default Task
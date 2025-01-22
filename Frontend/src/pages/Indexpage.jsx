import React, { useState } from 'react'



const Indexpage = () => {
    const [id,setid]=useState('');
    const [name,setname]=useState('');
    const [description,setdescription]=useState('');
const submitform=(e)=>{
    e.preventDefault();

  const data = {
        id: id,
        name:name,
        description:description
    }
    console.log(data)
    const res= adddetails(data);
    console.log(res);
}


const adddetails=async(data)=>{
    console.log(data);
    const res=await fetch('/api/create',{
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
          <h2>Enter username</h2>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <h2>Enter password</h2>
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>


        <button type="submit">
            submit
        </button>
      </form>
    </div>
  );
}

export default Indexpage
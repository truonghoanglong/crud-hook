import React, { useState } from 'react'

const Edit = ({currentUser,updateTodo}) => {
  const [update,setUpdate] = useState(currentUser)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let newUpda = {
      id:update.id +1,
      todo:update.title
    }
    setUpdate([...update,newUpda])
    updateTodo(update.id, update)  
  }
  return (
    <form onSubmit={e=>handleSubmit(e)}>
      <h2>Edit</h2>
      <input type="text"
        value={update.title}
        onChange={(e)=>setUpdate(e.target.value)}
      />
      <br />
      <button>Update</button>
    </form>
  )
}

export default Edit
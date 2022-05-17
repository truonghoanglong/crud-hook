import React from 'react'

const list = ({todos,deleTodo,editTodo}) => {
    
  const handleDelete = (id) =>{
    deleTodo(id)
  }

  return (
    <div>
        <h2>List Todo</h2>
        { todos && todos.length > 0 &&
            todos.map((todo)=>(
                <div className="" key={todo.id}>
                    <li style={{display:"inline"}}>{todo.title}</li> &emsp;
                    <div className="" style={{display:"inline"}}>
                      <button
                        onClick={()=>handleDelete(todo.id)}
                      >delete</button> &emsp;

                      <button
                        onClick={()=>editTodo(todo)}
                      >Edit</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default list
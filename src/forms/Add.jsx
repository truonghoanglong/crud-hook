import React, { useState } from 'react'

const Add = ({setTodos,todos}) => {
	const [add,setAdd] = useState('')
	
	const handleAdd = (e) =>{
		e.preventDefault()
		let newTodo = {
			id:todos.length +1,
			title:add
		}
		setTodos([...todos,newTodo])
		setAdd('')
	}
	return (
		<form onSubmit={e=>handleAdd(e)}>
			<h2>Add</h2>
			<input type="text" 
				value={add}
				onChange={(e)=>setAdd(e.target.value)}
			/>
			<br />
			<button>Add</button>
		</form>
  )
}

export default Add
import { useState } from "react";
import Add from './forms/Add';
import Edit from "./forms/Edit";
import List from "./list/List";
const App = () => {
	const [todos,setTodos] = useState([
		{id:1,title:'CV1'},
		{id:2,title:'CV2'},
		{id:3,title:'CV3'},
	])
	const [edit,setEdit] = useState(false)

	//crud
	const deleTodo = (id) =>{
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const [currentUser, setCurrentUser] = useState( {id: null, todo: ''})

	const editTodo = (to) =>{
		setEdit(true)
		setCurrentUser({id:to.id, title:to.title })
	}
	const updateTodo = (value) =>{
		setEdit(false)
		setTodos(todos.map(item => item.id === value.id ? value : item))
	}

    return (
      <div className="App">
        <h2>Todo Long</h2>
		<div className="container">		
			{edit ?
				(<Edit currentUser={currentUser} updateTodo={value => updateTodo(value)} />)	
			: 
				(<Add setTodos={setTodos} todos={todos}/>)
			}
			
			
			<List todos={todos} deleTodo={deleTodo} editTodo={editTodo}/>
		</div>
      </div>
    );
}

export default App;

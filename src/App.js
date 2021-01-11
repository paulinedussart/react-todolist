import './App.scss';
import React, { useState, useEffect } from 'react';

// Importing Components
import Tasks from './components/Tasks'
import Form from './components/Form'
import Loader from './ui/Loader'
const axios = require('axios');

function App() {

	const [todos, SetTodos] = useState([])
	const [loading, setLoading] = useState(true)
	
	const getTodos = async () => {
		await axios.get('https://cors-anywhere.herokuapp.com/https://pau16-todolist-api.herokuapp.com/api/v1/todos', {
			method: "GET",
			headers: {
				"Access-Control-Allow-Origin": "*",
			},
		})
			.then(function (response) {
				// handle success
				setLoading(false)
				SetTodos(response.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
	}

	useEffect(() => {
		getTodos()
	}, [])

	const handleSubmit = async (e) => {
		e.preventDefault()
		await axios({
			method: 'post',
			url: 'https://cors-anywhere.herokuapp.com/https://pau16-todolist-api.herokuapp.com/api/v1/todos',
			data: {
				title: e.target.title.value,
				done: false
			}
		})
			.then(function (response) {
			// handle success add new task and render new state
				SetTodos([response.data, ...todos])
		})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}

  return (
		<div className="App bg-blue-200 h-screen pt-24 d-flex justify-center">
			<div className="w-2/4">
				<h1 className="font-serif font-black text-3xl pb-8">Task Manager</h1>	

				<div className="mb-3">
					<form className="input-group" onSubmit={handleSubmit}>
						<input name="title" type="text" className="form-control" placeholder="Add a new task" aria-label="new todo" aria-describedby="newTodoInput" />
						<button className="btn btn-primary btn-bg-blue-800" type="submit" id="button-addon2">Button</button>
					</form>
					<button className="btn btn-warning m-2">All Tasks</button>
					<button className="btn btn-warning m-2">Completed Tasks</button>
					<button className="btn btn-warning m-2">Uncompleted Tasks</button>
				</div>


				<div className="p-3 shadow-md bg-white rounded-lg">
					{console.log(todos)}
					{ loading ? <Loader /> : <Tasks todos={todos} /> }
				</div>
		 	</div>
    </div>
  );
}

export default App;

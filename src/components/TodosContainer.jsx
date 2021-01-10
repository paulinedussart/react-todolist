import React, { useState, useLayoutEffect } from 'react';
import Loader from '../ui/Loader'
import Todos from './Todos'
const axios = require('axios');

export default function TodosContainer() {
	const [todos, SetTodos] = useState()
	const [loading, setLoading] = useState(true)

	useLayoutEffect(() => {
		axios.get('https://cors-anywhere.herokuapp.com/https://pau16-todolist-api.herokuapp.com/api/v1/todos', {
			method: "GET",
			headers: {
				"Access-Control-Allow-Origin": "http://localhost:3000/",
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
	}, [])

	return (
		<div className="w-2/4">
			<h1 className="font-serif font-black text-3xl pb-8">Task Manager</h1>	
			<div>
				{ loading ? <Loader /> : <Todos todos={todos}/>}
			</div>
		</div>	
	)
}
import React, { useState, useLayoutEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
const axios = require('axios');


function Loader() {
	return (
		<Spinner animation="grow" />
	) 
}

export default function Todos() {
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
		<div>
			<h1 className="font-serif font-black text-3xl">Task Manager</h1>
			
			{ loading ? <Loader/> : <div>{JSON.stringify(todos)}</div>}
		</div>	


	)
}
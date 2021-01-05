import React, { useState, useEffect } from 'react';
const axios = require('axios');


export default function Todos() {
const [todos, SetTodos] = useState()

	useEffect(() => {
		axios.get('https://cors-anywhere.herokuapp.com/https://pau16-todolist-api.herokuapp.com/api/v1/todos', {
			method: "GET",
			mode: "no-cors",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				"Access-Control-Allow-Methods": "GET",
				"Access-Control-Allow-Origin": "*",
			},
		})
			.then(function (response) {
				// handle success
				console.log(response.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
	}, [])

	return (
		<h1 className="font-serif font-black text-3xl">Task Manager</h1>

	)
}
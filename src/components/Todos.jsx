import React from 'react' 
import Loader from '../ui/Loader'

export default function Todos({todos}) {
	return (
		<div>
			<div className="input-group mb-3">
				<input type="text" className="form-control" placeholder="Add a new todo" aria-label="Recipient's username" aria-describedby="button-addon2"/>
					<div className="input-group-append">
					<button className="btn btn-primary btn-bg-blue-800" type="button" id="button-addon2">Button</button>
					</div>
			</div>
			<div className="p-2 text-left shadow-md bg-white rounded-lg">
				{todos === undefined ? <Loader /> : todos.map((todo, key) => <Todo key={key} todo={todo}/>)}

			</div>
		</div>
	)
}


function Todo({todo}) {
	return (
		<div className="my-1 d-flex justify-content-between">
			<div>
				<input type="checkbox" className="checked:bg-blue-600 checked:border-transparent mr-2" {...todo.done ? "checked" : ""} ></input>
				{todo.title} 
			</div>
			<button className="btn btn-danger btn-sm"> <i class="fa fa-times pr-1"></i> <span className="font-bold">Delete</span></button>
		</div>
	)
}
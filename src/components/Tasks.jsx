// Importing Components
import Loader from '../ui/Loader'

export default function Tasks({ todos }) {

	return (
		<div>
				{todos === undefined ? <Loader  /> : todos.map((todo, key) => <Task className="text-left" key={key} todo={todo} />)}
		</div>
	)
}

function Task({ todo }) {
	return (
		<div className="my-1 d-flex justify-content-between">
			<div>
				<input type="checkbox" className="checked:bg-blue-600 checked:border-transparent mr-2" {...todo.done ? "checked" : ""} ></input>
				{todo.title}
			</div>
			<button className="btn btn-danger btn-sm"> <i className="fa fa-times pr-1"></i> <span className="font-bold">Delete</span></button>
		</div>
	)
}
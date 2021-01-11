import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

export default function Loader() {
	return (
		<div>
			<Spinner animation="grow" /><br/>
			Waiting for tasks Loading
		</div>
	)
}
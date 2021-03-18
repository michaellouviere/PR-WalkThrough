import React, { useState } from 'react'
import EventForm from './EventForm'

const AddEvent = () => {
	const [entry, setEntry] = useState(0);
	const [unused, setUnused] = useState(0);

	const createEvent = event => {
		//do something
	}

	const setEntryHandler = e => {
		setEntry('My Entry');
	}

	return (
		<div>
			{entry}
			<button onClick={setEntryHandler}></button>
			<EventForm />
		</div>
	)
}

export default AddEvent
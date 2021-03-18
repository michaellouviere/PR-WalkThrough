import React, { useState } from 'react'
import EventForm from './EventForm'

const AddEvent = () => {
	const [calendarEntry, setCalendarEntry] = useState(0);
	const [unusedStateProp, setUnusedStateProp] = useState(0);

	const createCalendarEvent = event => {
		//do something
	}

	const setEntryHandler = e => {
		setCalendarEntry('My Entry');
	}

	const newFunction = e => {
		console.log('junk code')
	}

	return (
		<div>
			{calendarEntry}
			<button onClick={setEntryHandler}></button>
			<EventForm />
		</div>
	)
}

export default AddEvent
import React from 'react';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

import './App.css';
import Main from './components/Main';

const App = () => {
	return (
		<div>
			<div>
				<Main />
			</div>
			<div className="container-fluid">
				<div className="col-lg-12">
					<p className="tagline">Built with React, FullCalendar.io, Firebase and lots of ❤ by Mike Louviere</p>
				</div>
			</div>
		</div>
	);
}

export default App;

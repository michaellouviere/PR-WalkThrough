import React from 'react'

const EventForm = () => {
	return (
		<div>
			<div className="modal fade" id="add-event" tabIndex="-1" role="dialog">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Modal title</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span> 
							</button>
						</div>
						<div className="modal-body p-3">
							<form>
								<div className="form-group">
									<label className="control-label">Event Title</label>
									<input 
										type="text" 
										className="form-control form-white"
										placeholder="Enter Title"
										name="event-name"
										/>
								</div>
								<div className="form-check">
									<input 
										type="checkbox" 
										className="form-check-input"
										name="checkbox"
										id="checkbox"
										/>
										<label htmlFor="checkbox" className="control-label">All-day event? (optional)</label>
								</div>
								<div className="form-group">
									<label className="control-label">Start</label>
									<input 
										type="date" 
										className="form-control form-white"
										name="event-start"
										/>
								</div>
								<div className="form-group">
									<label className="control-label">End</label>
									<input 
										type="date" 
										className="form-control form-white"
										name="event-end"
										/>
								</div>
								<div className="form-group">
									<label className="control-label">Choose Event Color</label>
									<select className="form-control">
										<option>Select color</option>
										<option>Primary</option>
										<option>Info</option>
										<option>Danger</option>
										<option>Success</option>
									</select>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary">Save</button>
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EventForm
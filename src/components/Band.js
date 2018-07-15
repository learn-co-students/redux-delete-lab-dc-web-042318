import React, { Component } from "react";

class Band extends Component {
	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(e) {
		console.log({
			type: "DELETE_BAND",
			id: parseInt(this.props.id)
		});
		this.props.store.dispatch({
			type: "DELETE_BAND",
			id: parseInt(this.props.id)
		});
	}

	render() {
		return (
			<li>
				{this.props.band.text}
				<button onClick={this.handleDelete}>Delete</button>
			</li>
		);
	}
}

export default Band;

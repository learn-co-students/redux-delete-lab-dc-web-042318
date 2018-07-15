import React, { Component } from "react";
import Band from "./Band";

class Bands extends Component {
	render() {
		const bandsList = this.props.store
			.getState()
			.bands.map(band => (
				<Band
					band={band}
					key={band.text}
					store={this.props.store}
					id={band.id}
				/>
			));
		return <ul>{bandsList}</ul>;
	}
}

export default Bands;

import React, { Component } from 'react';
// import Typography from '@material-ui/core/Typography';

export default class Slider extends Component {
	constructor() {
		super();
		this.state = { sliderValue: 1, url: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.addImage = this.addImage.bind(this);
	}

	handleChange(e) {
		console.log(e.target);
		this.state.sliderValue = e.target.value;
	}
	handleClick(e) {
		fetch('/api/getImage')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(this.state.sliderValue);
				this.setState({ url: data[this.state.sliderValue - 1].image });
			})
			.catch((err) => console.log('Fetching error.'));
	}
	addImage() {
		return <img src={this.state.url} />;
	}
	render() {
		return (
			<div>
				<input
					type="range"
					defaultValue={this.state.sliderValue}
					onMouseUp={this.handleChange}
					step="1"
					min="1"
					max="5"
				/>
				<button onClick={this.handleClick}> SHOW ME THE FEET</button>
				{this.addImage()}
			</div>
		);
	}
}

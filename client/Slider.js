import React, { useState } from 'react';
// import Typography from '@material-ui/core/Typography';

export default function Slider() {
	const [ sliderValue, setSliderValue ] = useState(0);

	const handleChange = (e) => {
		console.log(e.target);
		setSliderValue(e.target.value);
	};
	const handleClick = (e) => {
		fetch('/api/getImage')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log('data', data[sliderValue].image);
			})
			.catch((err) => console.log('Fetching error.'));
	};
	return (
		<div>
			<input type="range" defaultValue={sliderValue} onMouseUp={handleChange} step="1" min="1" max="5" />
			<button onClick={handleClick}> SHOW ME THE FEET</button>
		</div>
	);
}

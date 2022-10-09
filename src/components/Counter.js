import React, { useState } from 'react'
import PropTypes from "prop-types";
import { Button, TextField } from '@mui/material';

const Counter = ({min = 1, max = 10}) => {
	let [ current, setCurrent ] = useState(min);

	function applyCurrent(num) {
		let validNum = Math.max(min, Math.min(max, num));
		setCurrent(validNum);
	}

	let inc = () => applyCurrent(current + 1); 
	let dec = () => applyCurrent(current - 1); 
	
	function parseCurrentStr(e) {
		let num = parseInt(e.target.value);
		applyCurrent(isNaN(num) ? min : num);
	}

	return <div>
		<Button variant="contained" onClick={ dec }>Минус - 1</Button>
		<TextField type='text' value={current} size='small' onChange={parseCurrentStr}/>
		<Button type="button" variant="contained" onClick={ inc }>Плюс + 1</Button>
	</div>
}

Counter.propTypes = {
	max: PropTypes.number,
	min: PropTypes.number
}
 
export default Counter;
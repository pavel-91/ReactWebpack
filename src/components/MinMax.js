import React, { useState } from 'react'
import PropTypes from "prop-types";
import { Button, TextField } from '@mui/material';

const MinMax = ({min = 1, max, current, onChange}) => {

	function applyCurrent(num) {
		let validNum = Math.max(min, Math.min(max, num));
		onChange(validNum);
	}

	let inc = () => applyCurrent(current + 1); 
	let dec = () => applyCurrent(current - 1); 
	
	function parseCurrentStr(e) {
		let num = parseInt(e.target.value);
		applyCurrent(isNaN(num) ? min : num);
	}

	return <div>
		<Button variant="contained" onClick={ dec }>-</Button>
		<TextField type='text' value={current} size='small' onChange={parseCurrentStr}/>
		<Button type="button" variant="contained" onClick={ inc }>+</Button>
	</div>
}

MinMax.propTypes = {
	max: PropTypes.number.isRequired,
	min: PropTypes.number,
	current: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
}
 
export default MinMax;
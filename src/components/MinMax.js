import React, { useRef } from 'react'
import PropTypes from "prop-types";

const MinMax = ({min = 1, max, current, onChange}) => {
	let inp = useRef();

	function onKeyPress(e) {
		if(e.key === 'Enter'){
			parseCurrentStr(e);
		}
	}

	function applyCurrent(num) {
		let validNum = Math.max(min, Math.min(max, num));
		inp.current.value = validNum;
		onChange(validNum);
	}

	let inc = () => applyCurrent(current + 1); 
	let dec = () => applyCurrent(current - 1); 
	
	function parseCurrentStr() {
		let num = parseInt(inp.current.value);
		applyCurrent(isNaN(num) ? min : num);
	}

	return <div>
		<button variant="contained" onClick={ dec }>-</button>
		<input
			ref={inp}
			type='text'
			size='small'
			defaultValue={current}
			onBlur={parseCurrentStr} 
			onKeyPress={onKeyPress}/>
		<button type="button" variant="contained" onClick={ inc }>+</button>
	</div>
}

MinMax.propTypes = {
	max: PropTypes.number.isRequired,
	min: PropTypes.number,
	current: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
}
 
export default MinMax;
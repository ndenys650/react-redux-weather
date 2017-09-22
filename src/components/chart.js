import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

// create chart compenent
// component because its receiving data and not working with redux
export default (props) => {
	return (
		// es6 of chart component here
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
			</Sparklines>
		</div>
	);
}
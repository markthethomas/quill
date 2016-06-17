import React from 'react';

import uuid from 'uuid';
import Notes from './Notes';

const notes = [
	{
		id: uuid.v4(),
		task: 'Learn React'
	},
	{
		id: uuid.v4(),
		task: 'Corporate site update'
	}
];

export default () => (
	<div>
		<button onClick={() => console.log('add note')}>+</button>
		<Notes notes={notes} />
	</div>
); 

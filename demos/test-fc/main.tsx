import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
	const [num, setNum] = useState(0);
	console.log('num', num);
	window.setNum = setNum;

	return (
		<div onClickCapture={() => setNum(num + 1)}>
			{num === 3 ? <Child /> : num}
		</div>
	);
}

function Child() {
	return <div>{'Child Component'}</div>;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<App />
);

import React, { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Table from './components/Table/Table';


function App() {

	const [newRecord, setNewRecord] = useState({});

	const updateNewRecord = (dataFromTheForm) => {
		setNewRecord(dataFromTheForm)
	}

	return (
		<div className='app wrapper'>
			
			<h1 className='app__title'>Kalkulator stanowiska komputerowego</h1>
			<Form update={updateNewRecord}/>
			<Table valueNewRecord={newRecord}/>
		</div>
	);
}

export default App;

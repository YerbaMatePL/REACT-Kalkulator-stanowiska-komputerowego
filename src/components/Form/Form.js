import React, { useState } from 'react';
import './Form.css';
import Select from './Select/Select';
import axios from 'axios';


function Form() {
	const [dataForm, setDataForm] = useState({
		name: '',
		description: '',
		categoryId: '',
		price: '',
	});

	const preventDefault = (e) => {
		e.preventDefault();
	};

	const updateField = (e) => {
		setDataForm({
			...dataForm,
			[e.target.name]: e.target.value,
			categoryId: categoryValue,
		});
	};

	// State from the Select component

	const [categoryValue, setCategoryValue] = useState('1');

	const updateCategoryValue = (dataFromSelect) => {
		setCategoryValue(dataFromSelect);
	};

	// State loading

	const [loading, setLoading] = useState(false);

	//  Sending data to the server and form validation

	const [errorInfo, setErrorInfo] = useState('');

	async function saveOnServer() {
		if (
			dataForm.name === '' ||
			dataForm.description === '' ||
			dataForm.price === ''
		) {
			setErrorInfo('Uzupełnij wszystkie pola ⇩');
		} else {
			setLoading(true);
			
			await insert();

			setDataForm({
				name: '',
				description: '',
				categoryId: '',
				price: '',
			});

			setErrorInfo('');
			await fetchCurrentList();

			setLoading(false);
		}
	}
	// Downloading the current item list from the server
	async function fetchCurrentList() {
		const currentList = await axios.get('http://localhost:3005/items');
		console.log(currentList.data);
	}

	async function insert() {
		await axios.post('http://localhost:3005/items', dataForm);
	}

	return (
		<div className='form'>
			<div className='form__items' onSubmit={preventDefault}>
				<p className='form__error'>{errorInfo}</p>
				<div className='form__item'>
					<div className='form__item_labels'>
						<label htmlFor='item'>przedmiot</label>
					</div>
					<div className='form__item_inputs'>
						<input
							type='text'
							id='item'
							name='name'
							placeholder='Podaj nazwę przedmiotu'
							value={dataForm.name}
							onChange={updateField}
						/>
					</div>
				</div>
				<div className='form__item'>
					<div className='form__item_labels'>
						<label htmlFor='description'>Opis</label>
					</div>
					<div className='form__item_inputs'>
						<input
							value={dataForm.description}
							name='description'
							type='text'
							id='description'
							placeholder='Podaj krótki opis np. model'
							onChange={updateField}
						/>
					</div>
				</div>
				<Select
					name='categoryId'
					update={updateCategoryValue}
					value={categoryValue}
				/>
				<div className='form__item'>
					<div className='form__item_labels'>
						<label htmlFor='price'>Cena</label>
					</div>
					<div className='form__item_inputs'>
						<input
							name='price'
							value={dataForm.price}
							type='number'
							step='0.5'
							min='0'
							id='price'
							placeholder='Podaj cenę przedmiotu'
							onKeyPress={(e) => !/[0-9.,]/.test(e.key) && e.preventDefault()}
							onChange={updateField}
						/>
					</div>
				</div>
				<div className='form__item'>
					<div className='form__item__btnAdd'>
						{loading ?  <button onClick={saveOnServer} type='submit'>
						<div class="lds-ring"><div></div><div></div><div></div><div></div></div>
						</button> :
							<button onClick={saveOnServer} type='submit'>
								Dodaj
							</button>
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Form;

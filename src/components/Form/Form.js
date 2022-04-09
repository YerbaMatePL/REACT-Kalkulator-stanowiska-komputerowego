import React, { useState } from 'react';
import './Form.css';
import Select from './Select/Select';
import axios from 'axios';

function Form(props) {
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

	// state from the Select component

	const [categoryValue, setCategoryValue] = useState('1');

	const updateCategoryValue = (dataFromSelect) => {
		setCategoryValue(dataFromSelect);
	};

	// state loading

	const [loading, setLoading] = useState(false);

	//  sending data to the server and form validation

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

			await sendData();

			props.update(dataForm);

			clearForm();

			setLoading(false);
		}
	}

	async function sendData() {
		await axios.post('http://localhost:3005/items', dataForm);
	}

	const clearForm = () => {
		setDataForm({
			name: '',
			description: '',
			categoryId: '',
			price: '',
		});

		setErrorInfo('');
	};

	const onKeyDownHandler = (e) => {
		e.key === 'Enter' && saveOnServer();
	};

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
							onKeyDown={onKeyDownHandler}
							type='text'
							id='item'
							name='name'
							placeholder='Podaj nazwę przedmiotu...'
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
							onKeyDown={onKeyDownHandler}
							value={dataForm.description}
							name='description'
							type='text'
							id='description'
							placeholder='Podaj krótki opis przedmiotu...'
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
							onKeyDown={onKeyDownHandler}
							name='price'
							value={dataForm.price}
							type='number'
							step='0.5'
							min='0'
							id='price'
							placeholder='Podaj cenę przedmiotu...'
							onKeyPress={(e) => !/[0-9.,]/.test(e.key) && e.preventDefault()}
							onChange={updateField}
						/>
					</div>
				</div>
				<div className='form__item'>
					<div className='form__item__btnAdd'>
						{loading ? (
							<button onClick={saveOnServer} type='submit'>
								<div className='lds-ring'>
									<div></div>
									<div></div>
									<div></div>
									<div></div>
								</div>
							</button>
						) : (
							<button onClick={saveOnServer} type='submit' title='Dodaj do listy'>
								Dodaj
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Form;

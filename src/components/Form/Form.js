import React, { useState } from 'react';
import './Form.css';
import Select from './Select/Select';

function Form() {
	const [dataForm, setDataForm] = useState({
		name: '',
		description: '',
		categoryId: '',
		price: '',
	});

	const printValues = (e) => {
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

	return (
		<div className='form'>
			<div className='form__items' onSubmit={printValues}>
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
				<Select name="categoryId" update={updateCategoryValue} value={categoryValue}/>
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
							id='price'
							placeholder='Podaj cenę przedmiotu'
							onChange={updateField}
						/>
					</div>
				</div>
				<div className='form__item'>
					<div className='form__item__btnAdd'>
						<button>Dodaj</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Form;

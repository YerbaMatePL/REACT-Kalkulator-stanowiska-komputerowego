import React, { useEffect, useState } from 'react';
import './Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Summary from '../Summary/Summary';

function Table(props) {
	// // fetch data from server to table

	const [currentListValue, setCurrentListValue] = useState([]);

	async function fetchCurrentList() {
		const currentList = await axios.get('http://localhost:3005/items');

		setCurrentListValue(currentList.data);
	}

	useEffect(() => {
		fetchCurrentList();
	}, [props.valueNewRecord]);

	// delete record in table

	async function deleteRecord() {
		await axios.delete('http://localhost:3005/items/:id');
		await fetchCurrentList();
	}

	// summary data

	const quantityOfItems = currentListValue.length;

	const priceArray = currentListValue.map((price) => Number(price.price));

	const totalPrice = priceArray.reduce((partialSum, a) => partialSum + a, 0);

	// edit record in table 

	const [openModalToEditValue, setopenModalToEditValue] = useState('');

	const [dataSelectedRecord, setdataSelectedRecord] = useState({
		name: '',
		description: '',
		categoryId: '',
		price: '',
	});

	const [categoriesInModal, setCategoriesInModal] = useState([]);

	async function fetchAllCategories() {
		const response = await axios.get('http://localhost:3005/categories');

		setCategoriesInModal(response.data);
	}

	const [selectedItemId, setSelectedItemId] = useState();

	const openModalToEdit = (value) => {
		fetchAllCategories();

		setSelectedItemId(value.id);
		setdataSelectedRecord({
			name: value.name,
			description: value.description,
			categoryId: value.category.id,
			price: value.price,
		});

		setopenModalToEditValue('visbile');
	};

	const changeRecordText = (e) => {
		setdataSelectedRecord({
			...dataSelectedRecord,
			[e.target.name]: e.target.value,
		});
	};
	
	const closeModalToEdit = () => {
		setopenModalToEditValue('');
	};

	const [errorInfoEditedRecord, setErrorInfoEditedRecord] = useState('');

	async function saveEditedRecord() {
		if (
			dataSelectedRecord.name === '' ||
			dataSelectedRecord.description === '' ||
			dataSelectedRecord.price === ''
		) {
			setErrorInfoEditedRecord('Uzupełnij wszystkie pola ⇩');
		} else {
			clearErrorInfo();

			await axios.put(
				`http://localhost:3005/items/${selectedItemId}`,
				dataSelectedRecord
			);

			fetchCurrentList();
			closeModalToEdit();
		}
	}

	const clearErrorInfo = () => {
		setErrorInfoEditedRecord('');
	};

	const onKeyDownHandler = (e) => {
		if (e.key === 'Enter') {
			saveEditedRecord();
		} else if (e.key === 'Escape') {
			closeModalToEdit();
		}
	};

	return (
		<div>
			<div className='tblContainer'>
				<h2>Aktualna lista</h2>
				<div className='tblHeader'>
					<table cellPadding='0' cellSpacing='0' border='0'>
						<thead>
							<tr>
								<th>Przedmiot</th>
								<th>Opis</th>
								<th>Kategoria</th>
								<th>Cena (zł)</th>
								<th>Akcje</th>
							</tr>
						</thead>
					</table>
				</div>
				<div className='tblContent'>
					<table cellPadding='0' cellSpacing='0' border='0'>
						<tbody>
							{currentListValue.map((value) => (
								<tr key={value.id}>
									<td>{value.name}</td>
									<td>{value.description}</td>
									<td id={value.category.id}>{value.category.name}</td>
									<td>{value.price}</td>
									<td>
										<div className='btnsContainer'>
											<button
												title='Edytuj rekord'
												onClick={() => {
													openModalToEdit(value);
												}}
											>
												<FontAwesomeIcon icon={faPencil} />
											</button>
											<button onClick={deleteRecord} title='Usuń rekord'>
												<FontAwesomeIcon icon={faTrash} />
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<div
				onKeyDown={onKeyDownHandler}
				className={`modal wrapper bgc ${openModalToEditValue}`}
			>
				<div className='modal__Form modalToEdit  '>
					<h2>Edytuj zadanie:</h2>
					<p className='form__error'>{errorInfoEditedRecord}</p>
					<input
						name='name'
						value={dataSelectedRecord.name}
						onChange={changeRecordText}
						type='text'
						placeholder='Podaj nazwę przedmiotu...'
					></input>
					<input
						name='description'
						value={dataSelectedRecord.description}
						type='text'
						placeholder='Podaj krótki opis przedmiotu...'
						onChange={changeRecordText}
					></input>
					<select
						name='categoryId'
						onChange={changeRecordText}
						value={dataSelectedRecord.categoryId}
					>
						{categoriesInModal.map((category) => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						))}
					</select>
					<input
						name='price'
						value={dataSelectedRecord.price}
						type='number'
						min='0'
						placeholder='Podaj cenę przedmiotu...'
						onChange={changeRecordText}
						onKeyPress={(e) => !/[0-9.,]/.test(e.key) && e.preventDefault()}
					></input>
					<div className='modal__Form__btnsContainer'>
						<button
							onClick={saveEditedRecord}
							className=' modal__Form__btn modal__Form__btn--btnConfirm'
						>
							Zatwierdź
						</button>
						<button
							onClick={closeModalToEdit}
							className='modal__Form__btn modal__Form__btn--btnCancel '
						>
							Anuluj
						</button>
					</div>
				</div>
			</div>
			<Summary
				quantityOfItems={quantityOfItems}
				totalPrice={totalPrice}
			></Summary>
		</div>
	);
}

export default Table;

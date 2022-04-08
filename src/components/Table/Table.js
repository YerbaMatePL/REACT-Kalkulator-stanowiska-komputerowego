import React, { useEffect, useState } from 'react';
import './Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Summary from '../Summary/Summary';

function Table(props) {
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

	// edit record

	const [openModalValue, setOpenModalValue] = useState('');

	const [dataRecord, setDataRecord] = useState({
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

	const openModal = (value) => {
		fetchAllCategories();

		setSelectedItemId(value.id);
		setDataRecord({
			name: value.name,
			description: value.description,
			categoryId: value.category.id,
			price: value.price,
		});

		setOpenModalValue('visbile');
	};

	const closeModal = () => {
		setOpenModalValue('');
	};

	const changeRecordText = (e) => {
		setDataRecord({
			...dataRecord,
			[e.target.name]: e.target.value,
			[e.target.description]: e.target.value,
			[e.target.categoryId]: e.target.value,
			[e.target.price]: e.target.value,
		});
	};

	async function saveEditedRecord() {
		await axios.put(
			`http://localhost:3005/items/${selectedItemId}`,
			dataRecord
		);
		fetchCurrentList();
		closeModal();
	};

	const onKeyDownHandler = (e) => {

		if (e.key === 'Enter') {
			saveEditedRecord() 
		} else if (e.key === 'Escape'){
			closeModal()
		}
	}  

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
													openModal(value);
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
			<div  onKeyDown={onKeyDownHandler} className={`modal wrapper bgc ${openModalValue}`}>
				<div className='modal__Form  '>
					<h2>Edytuj zadanie:</h2>
					<input
						name='name'
						value={dataRecord.name}
						onChange={changeRecordText}
						type='text'
						placeholder='Podaj nazwę przedmiotu...'
					></input>
					<input
						name='description'
						value={dataRecord.description}
						type='text'
						placeholder='Podaj któtki opis...'
						onChange={changeRecordText}
					></input>
					<select
						name='categoryId'
						onChange={changeRecordText}
						value={dataRecord.categoryId}
					>
						{categoriesInModal.map((category) => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						))}
					</select>
					<input
						name='price'
						value={dataRecord.price}
						type='number'
						placeholder='Podaj cenę przedmiotu...'
						onChange={changeRecordText}
					></input>
					<div className='modal__Form__btnsContainer'>
						<button
							onClick={saveEditedRecord}
							className=' modal__Form__btn modal__Form__btn--btnConfirm'
						>
							Zatwierdź
						</button>
						<button
							onClick={closeModal}
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

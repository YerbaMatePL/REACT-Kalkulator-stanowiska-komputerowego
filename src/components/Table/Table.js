import React, { useEffect, useState } from 'react';
import './Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Table() {
	const [currentListValue, setCurrentListValue] = useState([]);

	async function fetchCurrentList() {
	const currentList = await axios.get('http://localhost:3005/items');

	setCurrentListValue(currentList.data);
	}

	useEffect(() => {
		fetchCurrentList();
	}, []);

	return (
		<div className='tableContainer'>
			<h2>Aktualna lista</h2>
			<div className='tblHeader'>
				<table cellPadding='0' cellSpacing='0' border='0'>
					<thead>
						<tr>
							<th>Przedmiot</th>
							<th>Opis</th>
							<th>Kategoria</th>
							<th>Cena</th>
							<th>Akcje</th>
						</tr>
					</thead>
				</table>
			</div>
			<div className='tblContent'>
				<table cellPadding='0' cellSpacing='0' border='0'>
					<tbody>
						{currentListValue.map((value) => (
							<tr>
								<td>{value.name}</td>
								<td>{value.description}</td>
								<td>{value.category.name}</td>
								<td>{value.price} zł</td>
								<td>
									<button>
										<FontAwesomeIcon icon={faPencil} />
									</button>
									<button>
										<FontAwesomeIcon icon={faTrash} />
									</button>
								</td>
							</tr>
            ))}
					</tbody>
				</table>{' '}
			</div>
		</div>
	);
}

export default Table;

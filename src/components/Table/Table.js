// import React, { useEffect } from 'react';
import './Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

function Table() {
// 	// Downloading the current item list from the server
// 	async function fetchCurrentList() {
// 		const currentList = await axios.get('http://localhost:3005/items');
// 		console.log(currentList.data);
// 	}

// 	useEffect(() => {
// 		fetchCurrentList();
// 	}, []);

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
						<tr>
							<td>Myszka</td>
							<td>Myszka model hgdhsd7676, kupic w sklepie</td>
							<td>$1.38</td>
							<td>+2.01</td>
							<td>
								<button>
									<FontAwesomeIcon icon={faPencil} />
								</button>
								<button>
									<FontAwesomeIcon icon={faTrash} />
								</button>
							</td>
						</tr>
					</tbody>
				</table>{' '}
			</div>
		</div>
	);
}

export default Table;

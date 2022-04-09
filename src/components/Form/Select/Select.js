import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Select(props) {
	const [categories, setCategories] = useState([]);

	async function fetchCategories() {
		const response = await axios.get('http://localhost:3005/categories');

		setCategories(response.data);
	}

	useEffect(() => {
		fetchCategories();
	}, []);

	return (
		<div className='form__item'>
			<div className='form__item_labels'>
				<label htmlFor='categories'>Kategoria</label>
			</div>
			<div className='form__item_inputs'>
				<select onChange={(e) => props.update(e.target.value)} id='categories'>
					{categories.map((category) => (
						<option key={category.id} value={category.id}>{category.name}</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default Select;

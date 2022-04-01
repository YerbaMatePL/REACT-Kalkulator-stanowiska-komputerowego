import './Form.css';

function Form() {
	return (
		<div className='form'>
			<div className='form__items'>
				<div className='form__item'>
					<div className='form__item_labels'>
						<label for='item'>przedmiot</label>
					</div>
					<div className='form__item_inputs'>
						<input type='text' id='item' placeholder='Podaj nazwę przedmiotu' />
					</div>
				</div>

				<div className='form__item'>
					<div className='form__item_labels'>
						<label for='description'>Opis</label>
					</div>
					<div className='form__item_inputs'>
						<input
							type='text'
							id='description'
							placeholder='Wpisz krótki opis np. model, marka przedmiotu'
						/>
					</div>
				</div>

				<div className='form__item'>
					<div className='form__item_labels'>
						<label for='categories'>Kategoria</label>
					</div>
					<div className='form__item_inputs'>
						<select id='categories'>
							<option selected value='Sprzęt'>
								Sprzęt
							</option>
							<option value='Oprogramowanie'>Oprogramowanie</option>
							<option value='Myszki'>Myszki</option>
						</select>
					</div>
				</div>

				<div className='form__item'>
					<div className='form__item_labels'>
						<label for='price'>Cena</label>
					</div>
                    <div className='form__item_inputs'>
					<input
						type='number'
						step='0.5'
						id='price'
						placeholder='Wpisz cenę przedmiotu'
					/>
                    </div>
				</div>

                <div className='form__item'>
                    <div className="form__item__btnAdd">
                    <button>Dodaj</button>
                    </div>
                </div>

			</div>
		</div>
	);
}

export default Form;
